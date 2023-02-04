import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  LogoutResponse,
  RefreshRequest,
  RefreshResponse,
  ValidateRequest,
  ValidateResponse,
} from '@test-task-5/grpc/generated/auth/auth';
import { AuthService } from './auth.service';
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @GrpcMethod('AuthService', 'Register')
  async register(data: RegisterRequest): Promise<RegisterResponse> {
    const user = await this.authService.register(data.login, data.password);
    return {
      user,
    };
  }

  @GrpcMethod('AuthService', 'Login')
  async login(data: LoginRequest): Promise<LoginResponse> {
    const user = await this.authService.login(data.login, data.password);
    return {
      user,
    };
  }

  @GrpcMethod('AuthService', 'Logout')
  async logout(data: LogoutRequest): Promise<LogoutResponse> {
    await this.authService.logout(data.refreshToken);
    return;
  }

  @GrpcMethod('AuthService', 'Refresh')
  async refresh(data: RefreshRequest): Promise<RefreshResponse> {
    const tokens = await this.authService.refreshTokens(data.refreshToken);
    return tokens;
  }

  @GrpcMethod('AuthService', 'Validate')
  async validate(data: ValidateRequest): Promise<ValidateResponse> {
    const validateResponse = await this.authService.validate(data.accessToken);
    return validateResponse;
  }
}
