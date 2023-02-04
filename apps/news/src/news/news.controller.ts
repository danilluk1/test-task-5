import { CreateNewsRequest } from '@test-task-5/grpc/generated/news/news';
import { GrpcMethod } from '@nestjs/microservices';
import { Controller, UseGuards } from '@nestjs/common';
import { GrpcAuthGuard } from './guards/auth.guard';

@Controller()
export class NewsController {
  @UseGuards(GrpcAuthGuard)
  @GrpcMethod('NewsService', 'CreateNews')
  async createNews(data: CreateNewsRequest) {
    return 'didi';
  }

  @UseGuards(GrpcAuthGuard)
  @GrpcMethod('NewsService', 'GetNews')
  async getNews(data: CreateNewsRequest) {
    return 'didi';
  }

  @UseGuards(GrpcAuthGuard)
  @GrpcMethod('NewsService', 'UpdateNews')
  async updateNews(data: CreateNewsRequest) {
    return 'didi';
  }

  @UseGuards(GrpcAuthGuard)
  @GrpcMethod('NewsService', 'DeleteNews')
  async deleteNews(data: CreateNewsRequest) {
    return 'didi';
  }
}
