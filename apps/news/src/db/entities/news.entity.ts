import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'news',
})
export default class News {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public text: string;

  @Column()
  public authorId: number;

  @Column()
  public likes: number;

  @Column()
  public views: number;
}
