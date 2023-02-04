import { PORTS } from '@test-task-5/grpc/servers/constants';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AdminController } from './admin.controller';
import AdminService from './admin.service';

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
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
