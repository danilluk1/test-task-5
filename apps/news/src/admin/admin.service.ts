import { SimpleUser } from './../../../../libs/grpc/generated/auth/auth';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { InjectDataSource } from '@nestjs/typeorm';
import News from 'src/db/entities/news.entity';
import { DataSource } from 'typeorm';
import { AuthService } from '../../../auth/src/auth.service';
@Injectable()
export default class AdminService implements OnModuleInit {
  private authService: AuthService;
  constructor(
    @Inject('AUTH_PACKAGE') private client: ClientGrpc,
    @InjectDataSource() private dataSource: DataSource,
  ) {}

  onModuleInit() {
    this.authService = this.client.getService<AuthService>('AuthService');
  }

  public async createNews(text: string, adminId: number) {
    const news = new News();
    news.authorId = adminId;
    news.text = text;

    await this.dataSource.getRepository(News).save(news);
    return news;
  }

  public async getUsers(limit: number, offset: number): Promise<SimpleUser[]> {
    const users = await this.authService.getUsers(limit, offset);
    return users;
  }
}
