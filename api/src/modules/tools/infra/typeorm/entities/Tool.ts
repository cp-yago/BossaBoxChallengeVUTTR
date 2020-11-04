import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tools')
class Tool {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @Column('simple-array')
  tags: string[];
}

export default Tool;
