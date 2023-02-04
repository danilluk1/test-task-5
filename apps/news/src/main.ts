import { AppModule } from './app.module';
import { PORTS } from '@test-task-5/grpc/servers/constants';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `0.0.0.0:${PORTS.NEWS_SERVER_PORT}`,
      protoPath: join(
        __dirname,
        '../../../../../',
        'libs/grpc/protos/news.proto',
      ),
      package: 'news',
    },
  });
  app.listen().then(() => console.log('News microservice is listening'));
}
bootstrap();
