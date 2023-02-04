import { AppModule } from './app.module';
import { PORTS } from '@test-task-5/grpc/servers/constants';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: `0.0.0.0:${PORTS.NEWS_SERVER_PORT}`,
      protoPath: join(
        __dirname,
        '../../../../../../',
        'libs/grpc/protos/news.proto',
      ),
      package: 'news',
    },
  });
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: `0.0.0.0:${PORTS.ADMIN_SERVER_PORT}`,
      protoPath: join(
        __dirname,
        '../../../../../../',
        'libs/grpc/protos/admin.proto',
      ),
      package: 'admin',
    },
  });
  await app.startAllMicroservices();
  console.log('News microservices started');
}
bootstrap();
