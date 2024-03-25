import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { TestQuiz } from '../../test-quiz/entities/test-quiz.entity';

@Entity()
export class Question {
 @PrimaryGeneratedColumn()
 id: number;

 @Column({nullable:false})
 content: string;

 @Column({ type: 'json', nullable: false })
 options: string[];

 @Column({nullable:false})
 correctOption: number;

 
 @ManyToOne(() => TestQuiz, testQuiz => testQuiz.questions, { onDelete: 'CASCADE' })
 testQuiz: TestQuiz;


 @CreateDateColumn()
 createdAt: Date;

 @UpdateDateColumn()
 updatedAt: Date;

 @DeleteDateColumn()
 deletedAt: Date;
}