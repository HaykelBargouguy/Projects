/* eslint-disable prettier/prettier */
import { Entity,Column, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Roadmap } from '../../roadmaps/entities/roadmap.entity';
import { User } from '../../users/entities/user.entity';
import { RecommandedCertification} from '../../recommanded-certifications/entities/recommanded-certification.entity';
import { RecommandedCourse } from '../../recommanded-courses/entities/recommanded-course.entity';
import { TestQuiz } from '../../test-quiz/entities/test-quiz.entity';
import { Validation } from '../../validations/entities/validation.entity';

@Entity()
export class Milestone {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Roadmap, roadmap => roadmap.milestones,{eager:true , onDelete: 'CASCADE' })
  roadmap: Roadmap;

  @OneToMany(() => Validation, validations => validations.milestone)
  validations: Validation[]

  @OneToMany(() => RecommandedCertification, recommandedCertification => recommandedCertification.milestone)
  recommandedCertifications: RecommandedCertification[];

  @OneToMany(() => RecommandedCourse, recommandedCourse => recommandedCourse.milestone)
  recommandedCourses: RecommandedCourse[];

  @OneToOne(() => TestQuiz, testQuiz => testQuiz.milestone)
  @JoinColumn()
  quiz: TestQuiz;

  @Column()
  description: string;

  @Column()
  orderNumber:number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
