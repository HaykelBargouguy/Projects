import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Milestone } from '../../milestone/entities/milestone.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Validation {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.validations)
  public user: User

  @ManyToOne(() => Milestone, (milestone) => milestone.validations)
  public milestone: Milestone
  @Column({ default: false })
  passed: boolean;

  @Column({ type: 'float', default: 0.0 })
  score: number;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

