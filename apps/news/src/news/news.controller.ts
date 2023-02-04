import {
  CreateNewsRequest,
  GetNewsRequest,
  LikeNewsRequest,
  DeleteNewsRequest,
  UpdateNewsRequest,
  CreateNewsResponse,
} from '@test-task-5/grpc/generated/news/news';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { Controller, UseGuards } from '@nestjs/common';
import { GrpcAuthGuard } from './guards/auth.guard';
import { NewsService } from './news.service';

@Controller()
export class NewsController {
  constructor(private newsService: NewsService) {}

  @UseGuards(GrpcAuthGuard)
  @GrpcMethod('NewsService', 'CreateNews')
  async createNews(
    data: CreateNewsRequest,
    metadata: any,
  ): Promise<CreateNewsResponse> {
    const id = metadata.get('id')[0];
    if (!data.text) {
      throw new RpcException({
        code: 3,
        message: 'Please, specify text',
      });
    }

    const news = await this.newsService.createNews(data.text, id);
    return {
      news: news,
    };
  }

  @GrpcMethod('NewsService', 'GetNews')
  async getNews(data: GetNewsRequest, metadata: any) {
    if (!data.id) {
      throw new RpcException({
        code: 3,
        message: 'Please, specify id',
      });
    }

    const news = await this.newsService.getNews(data.id);
    return {
      news: news,
    };
  }

  @UseGuards(GrpcAuthGuard)
  @GrpcMethod('NewsService', 'UpdateNews')
  async updateNews(data: UpdateNewsRequest) {
    if (!data.text || !data.id) {
      throw new RpcException({
        code: 3,
        message: 'Please, specify text and id',
      });
    }
    const news = await this.newsService.updateNews(data.id, data.text);
    return {
      news: news,
    };
  }

  @UseGuards(GrpcAuthGuard)
  @GrpcMethod('NewsService', 'DeleteNews')
  async deleteNews(data: DeleteNewsRequest) {
    return { id: await this.newsService.deleteNews(data.id) };
  }

  @GrpcMethod('NewsService', 'LikeNews')
  async likeNews(data: LikeNewsRequest) {
    return await this.newsService.likeNews(data.id);
  }
}
