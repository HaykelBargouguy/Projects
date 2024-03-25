import { Entity, Column, OneToOne, OneToMany , PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Milestone } from '../../milestone/entities/milestone.entity';
import { Question } from '../../questions/entities/question.entity';


@Entity()
export class TestQuiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  title: string;

  @OneToOne(() => Milestone, milestone => milestone.quiz)
  milestone: Milestone;
  
  @OneToMany(() => Question, question => question.testQuiz , { cascade: true } )
  questions: Question[];
}
