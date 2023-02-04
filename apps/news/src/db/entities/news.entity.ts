import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'news',
})
export default class News {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public text: string;

  @Column({ nullable: true })
  public authorId: number;

  @Column({ default: 0 })
  public likes: number;

  @Column({ default: 0 })
  public views: number;
}
