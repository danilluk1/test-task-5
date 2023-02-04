import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';
import { join } from 'path';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(
            __dirname,
            '../../../../../../',
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
