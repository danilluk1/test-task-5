import { RpcException } from '@nestjs/microservices';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import News from 'src/db/entities/news.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class NewsService {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  public async createNews(text: string, authorId: number) {
    const news = new News();
    news.authorId = authorId;
    news.text = text;

    await this.dataSource.getRepository(News).save(news);
    return news;
  }

  public async deleteNews(id: number) {
    const news = await this.dataSource.getRepository(News).findOneBy({
      id: id,
    });

    if (!news) {
      throw new RpcException({
        status: 5,
        message: "Can't find news with this id",
      });
    }
    await this.dataSource.getRepository(News).delete({
      id: id,
    });

    return id;
  }

  public async updateNews(id: number, text: string) {
    const news = await this.dataSource.getRepository(News).findOneBy({
      id: id,
    });

    if (!news) {
      throw new RpcException({
        status: 5,
        message: "Can't find news with this id",
      });
    }

    news.text = text;
    await this.dataSource.getRepository(News).save(news);
    return news;
  }

  public async getNews(id: number) {
    const news = await this.dataSource.getRepository(News).findOneBy({
      id: id,
    });

    if (!news) {
      throw new RpcException({
        status: 5,
        message: "Can't find news with this id",
      });
    }

    news.views++;
    await this.dataSource.getRepository(News).save(news);

    return news;
  }

  public async likeNews(id: number) {
    const news = await this.dataSource.getRepository(News).findOneBy({
      id: id,
    });

    if (!news) {
      throw new RpcException({
        status: 5,
        message: "Can't find news with this id",
      });
    }

    news.likes++;
    await this.dataSource.getRepository(News).save(news);

    return news;
  }
}
