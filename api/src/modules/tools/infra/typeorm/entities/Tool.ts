import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tools')
class Tool {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @Column()
  tags: string;
}

export default Tool;
