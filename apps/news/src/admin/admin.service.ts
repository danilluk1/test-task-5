import { AuthController } from './../../../auth/src/auth.controller';
import { SimpleUser } from './../../../../libs/grpc/generated/auth/auth';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { InjectDataSource } from '@nestjs/typeorm';
import News from 'src/db/entities/news.entity';
import { DataSource } from 'typeorm';
import { firstValueFrom, Observable } from 'rxjs';
@Injectable()
export default class AdminService {
  private authService: AuthController;
  constructor(
    @Inject('AUTH_PACKAGE') private client: ClientGrpc,
    @InjectDataSource() private dataSource: DataSource,
  ) {
    this.authService = this.client.getService<AuthController>('AuthService');
  }

  public async createNews(text: string, adminId: number) {
    const news = new News();
    news.authorId = adminId;
    news.text = text;

    await this.dataSource.getRepository(News).save(news);
    return news;
  }

  public async getUsers(limit: number, offset: number): Promise<SimpleUser[]> {
    const users = await firstValueFrom(
      (await this.authService.getUsers({
        count: limit,
        offset: offset,
      })) as unknown as Observable<any>,
    );

    return users.users;
  }
}
