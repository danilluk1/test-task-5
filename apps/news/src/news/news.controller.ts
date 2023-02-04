import { CreateNewsRequest } from '@test-task-5/grpc/generated/news/news';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class NewsController {
  @GrpcMethod('NewsService', 'CreateNews')
  async createNews(data: CreateNewsRequest) {}
}
