import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Milestone } from '../../milestone/entities/milestone.entity';
import { Progress } from '../../progress/entities/progress.entity';

@Entity()
export class Roadmap {
  @PrimaryColumn({name:'id'})  
  id: string;

  @Column({nullable: false })
  title: string;

  @Column({ nullable: false})
  domain: string;

  @Column({ nullable:false })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Progress, progress => progress.roadmap)
  public progress: Progress[]

  @OneToMany(() => Milestone, milestone => milestone.roadmap , {cascade: true})
  milestones: Milestone[];

}

