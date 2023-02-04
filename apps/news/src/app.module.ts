import { AdminModule } from './admin/admin.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import News from './db/entities/news.entity';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: any) => ({
        type: 'postgres',
        host: configService.get('SQL_HOST'),
        port: +configService.get('SQL_PORT'),
        username: configService.get('SQL_USER'),
        password: configService.get('SQL_PASSWORD'),
        database: configService.get('SQL_DATABASE'),
        entities: [News],
        synchronize: true,
      }),
    }),
    // NewsModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
