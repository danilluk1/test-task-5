import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
} from '@test-task-5/grpc/generated/auth/auth';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { AuthService } from './auth.service';
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @GrpcMethod('AuthService', 'Register')
  async register(
    data: RegisterRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Promise<RegisterResponse> {
    const user = await this.authService.register(data.login, data.password);
    return {
      user,
    };
  }

  @GrpcMethod('AuthService', 'Login')
  async login(
    data: LoginRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Promise<LoginResponse> {
    const user = await this.authService.login(data.login, data.password);
    return {
      user,
    };
  }
}
