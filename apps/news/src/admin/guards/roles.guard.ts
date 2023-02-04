import { AuthController } from './../../../../auth/src/auth.controller';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CanActivate,
  Injectable,
  ExecutionContext,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role, ROLES_KEY } from '../decorators/roles.decorator';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable()
export class RolesAuthGuard implements CanActivate {
  private authService: AuthController;

  constructor(
    private reflector: Reflector,
    @Inject('AUTH_PACKAGE') private client: ClientGrpc,
  ) {
    this.authService = this.client.getService<AuthController>('AuthService');
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
      const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );

      if (!requiredRoles) {
        return true;
      }
      const userRole = await firstValueFrom(
        (await this.authService.getRole({
          accessToken: token,
        })) as unknown as Observable<any>,
      );
      if (!requiredRoles.includes(userRole.role as any)) {
        return false;
      }

      metadata.set('id', valid.id);
      return true;
    } catch (e) {
      return false;
    }
  }
}
