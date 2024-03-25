import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Milestone } from '../../milestone/entities/milestone.entity';


@Entity()
export class RecommandedCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  title: string;

  @Column({nullable:true})
  description: string;

  @Column({nullable:true})
  price: number;

  @Column({nullable:true})
  link: string;

  @ManyToOne(() => Milestone, milestone => milestone.recommandedCourses)
  milestone: Milestone;
}

