import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import * as argon2 from 'argon2';
import User from './db/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserDto } from './models/dtos/user.dto';
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

  public async logout(id: number) {
    const user = await this.dataSource.getRepository(User).findOneBy({
      id: id,
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
