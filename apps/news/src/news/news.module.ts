import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';
import { PORTS } from '@test-task-5/grpc/servers/constants';
import { join } from 'path';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: `0.0.0.0:${PORTS.AUTH_SERVER_PORT}`,
          package: 'auth',
          protoPath: join(
            __dirname,
            '../../../../../../../',
            'libs/grpc/protos/auth.proto',
          ),
        },
      },
    ]),
  ],
  providers: [NewsService],
  controllers: [NewsController],
})
export class NewsModule {}
