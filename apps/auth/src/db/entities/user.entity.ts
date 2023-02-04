import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Role from '../../models/role.enum';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public login: string;

  @Column()
  public password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  public role: Role;

  @Column({ nullable: true })
  public refreshToken: string;
}
