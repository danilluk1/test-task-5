import { AuthController } from './../../../../auth/src/auth.controller';
import { AuthService } from './../../../../auth/src/auth.service';
import { firstValueFrom, Observable } from 'rxjs';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class GrpcAuthGuard implements CanActivate {
  private authService: AuthController;
  constructor(@Inject('AUTH_PACKAGE') private client: ClientGrpc) {
    this.authService = client.getService<AuthController>('AuthService');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const type = context.getType();
    const prefix = 'Bearer ';
    let header;
    let metadata;
    if (type === 'rpc') {
      metadata = context.getArgByIndex(1);
      if (!metadata) {
        return false;
      }
      header = metadata.get('Authorization')[0];
    }

    if (!header || !header.includes(prefix)) {
      return false;
    }
    const token = header.split(' ')[1];
    try {
      const valid = await firstValueFrom(
        (await this.authService.validate({
          accessToken: token,
        })) as unknown as Observable<any>,
      );
      if (!valid?.id || !valid.login) {
        return false;
      }

      metadata.set('id', valid.id);
      return true;
    } catch (e) {
      return false;
    }
  }
}
