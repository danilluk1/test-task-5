import { AuthService } from './../../../../auth/src/auth.service';
import { Observable } from 'rxjs';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class GrpcAuthGuard implements CanActivate {
  private authService: AuthService;
  constructor(@Inject('AUTH_PACKAGE') private client: ClientGrpc) {
    this.authService = client.getService<AuthService>('AuthService');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const type = context.getType();
    const prefix = 'Bearer ';
    let header;
    if (type === 'rpc') {
      const metadata = context.getArgByIndex(1);
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
      const valid = await this.authService.validate(token);

      if (!valid?.id || !valid.login) {
        return false;
      }

      return true;
    } catch (e) {
      return false;
    }
  }
}
