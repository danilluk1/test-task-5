import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import * as argon2 from 'argon2';
import User from './db/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserDto } from './models/dtos/user.dto';
import Role from './models/role.enum';
import { SimpleUser } from '@test-task-5/grpc/generated/auth/auth';

@Injectable()
export class AuthService {
  constructor(
    @InjectDataSource() private dataSource: DataSource,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  public async register(login: string, password: string): Promise<UserDto> {
    const user = await this.dataSource.getRepository(User).findOneBy({
      login: login,
    });

    if (user) {
      throw new RpcException({
        code: 6,
        message: 'User already registered',
      });
    }

    const hash = await argon2.hash(password);

    const newUser = new User();
    newUser.login = login;
    newUser.password = hash;

    await this.dataSource.getRepository(User).save(newUser);

    const tokens = await this.getTokens(newUser.id, login);
    newUser.refreshToken = tokens.refreshToken;

    await this.dataSource.getRepository(User).save(newUser);

    return {
      refreshToken: newUser.refreshToken,
      id: newUser.id,
      login: newUser.login,
      accessToken: tokens.accessToken,
      role: newUser.role,
    };
  }

  public async login(login: string, password: string): Promise<UserDto> {
    const user = await this.dataSource.getRepository(User).findOneBy({
      login: login,
    });

    if (!user) {
      throw new RpcException({
        code: 5,
        message: 'User not found',
      });
    }

    const matches = await argon2.verify(user.password, password);
    if (!matches) {
      throw new RpcException({ code: 7, message: 'Wrong password' });
    }

    const tokens = await this.getTokens(user.id, login);
    user.refreshToken = tokens.refreshToken;

    await this.dataSource.getRepository(User).save(user);

    return {
      refreshToken: user.refreshToken,
      id: user.id,
      login: user.login,
      accessToken: tokens.accessToken,
      role: user.role,
    };
  }

  public async logout(refreshToken: string) {
    const user = await this.dataSource.getRepository(User).findOneBy({
      refreshToken: refreshToken,
    });

    if (!user) {
      throw new RpcException({
        code: 5,
        message: 'User not found',
      });
    }

    await this.dataSource.getRepository(User).save({
      ...user,
      refreshToken: null,
    });
  }

  public async refreshTokens(refreshToken: string) {
    const user = await this.dataSource.getRepository(User).findOneBy({
      refreshToken: refreshToken,
    });

    if (!user) {
      throw new RpcException({
        code: 5,
        message: 'User not found',
      });
    }

    if (user.refreshToken !== refreshToken) {
      throw new RpcException({
        code: 7,
        message: `Refresh token doesn't match with token on the server`,
      });
    }

    const tokens = await this.getTokens(user.id, user.login);
    user.refreshToken = tokens.refreshToken;
    await this.dataSource.getRepository(User).save(user);

    return tokens;
  }

  public async validate(
    accessToken: string,
  ): Promise<{ login: string; id: number }> {
    console.log(accessToken);
    if (!accessToken) {
      throw new RpcException({
        code: 7,
        message: 'Unauthorized',
      });
    }

    const payload = await this.jwtService.verifyAsync(accessToken, {
      secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
    });
    return { login: payload.login, id: payload.sub };
  }

  public async getRole(accessToken: string): Promise<Role> {
    if (!accessToken) {
      throw new RpcException({
        code: 7,
        message: 'Unauthorized',
      });
    }

    const payload = await this.jwtService.verifyAsync(accessToken, {
      secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
    });

    const user = await this.dataSource.getRepository(User).findOneBy({
      id: payload.sub,
    });

    return user.role;
  }

  public async getUsers(count: number, offset: number): Promise<SimpleUser[]> {
    const users = await this.dataSource.getRepository(User).find({
      skip: offset,
      take: count,
    });

    return users;
  }

  private async getTokens(id: number, login: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: id,
          login,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: id,
          login,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
