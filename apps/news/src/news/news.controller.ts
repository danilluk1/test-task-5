import {
  CreateNewsRequest,
  GetNewsRequest,
  LikeNewsRequest,
  DeleteNewsRequest,
  UpdateNewsRequest,
} from '@test-task-5/grpc/generated/news/news';
import { GrpcMethod } from '@nestjs/microservices';
import { Controller, UseGuards } from '@nestjs/common';
import { GrpcAuthGuard } from './guards/auth.guard';
import { NewsService } from './news.service';

@Controller()
export class NewsController {
  constructor(private newsService: NewsService) {}

  @UseGuards(GrpcAuthGuard)
  @GrpcMethod('NewsService', 'CreateNews')
  async createNews(data: CreateNewsRequest, metadata: any) {
    const id = metadata.get('id')[0];
    return await this.newsService.createNews(data.text, id);
  }

  @GrpcMethod('NewsService', 'GetNews')
  async getNews(data: GetNewsRequest, metadata: any) {
    return await this.newsService.getNews(data.id);
  }

  @UseGuards(GrpcAuthGuard)
  @GrpcMethod('NewsService', 'UpdateNews')
  async updateNews(data: UpdateNewsRequest) {
    return await this.newsService.updateNews(data.id, data.text);
  }

  @UseGuards(GrpcAuthGuard)
  @GrpcMethod('NewsService', 'DeleteNews')
  async deleteNews(data: DeleteNewsRequest) {
    return await this.newsService.deleteNews(data.id);
  }

  @GrpcMethod('NewsService', 'LikeNews')
  async likeNews(data: LikeNewsRequest) {
    return await this.newsService.likeNews(data.id);
  }
}
