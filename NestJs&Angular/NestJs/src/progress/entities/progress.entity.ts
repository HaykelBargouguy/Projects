import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Roadmap } from '../../roadmaps/entities/roadmap.entity';

@Entity()
export class Progress {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'float', default: 0 })
  percentage: number;

  @ManyToOne(() => User, (user) => user.progress)
  user: User

  @ManyToOne(() => Roadmap, (roadmap) => roadmap.progress)
   roadmap: Roadmap
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
