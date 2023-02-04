import { PORTS } from '@test-task-5/grpc/servers/constants';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AuthModule, {
    transport: Transport.GRPC,
    options: {
      url: `0.0.0.0:${PORTS.AUTH_SERVER_PORT}`,
      protoPath: '/libs/grpc/protos/auth.proto',
      package: 'auth',
    },
  });

  app.listen().then(() => console.log('Auth microservice is listening'));
}
bootstrap();
