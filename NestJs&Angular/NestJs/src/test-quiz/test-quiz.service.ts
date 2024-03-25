import { BadRequestException, Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { CreateTestQuizDto } from './dto/create-test-quiz.dto';
import { UpdateTestQuizDto } from './dto/update-test-quiz.dto';
import { TestQuiz } from '../test-quiz/entities/test-quiz.entity';
import { Question } from '../questions/entities/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as path from 'path';
import { CrudService } from '../common/crud.service';
@Injectable()
export class TestQuizService extends CrudService<TestQuiz> {
  constructor(
      @InjectRepository(TestQuiz)
      private readonly testQuizRepository: Repository<TestQuiz>,
      @InjectRepository(Question)
      private readonly questionRepository: Repository<Question>, 

  ) {
    super(testQuizRepository);
  }

  async createQuizIfNotExists(title: string): Promise<TestQuiz> {
    let quiz = await this.testQuizRepository.findOneBy({ title });
    if (!quiz) {
      quiz = this.testQuizRepository.create({ title });
    }
    return await this.testQuizRepository.save(quiz);
  }

  async addQuestionToQuiz(quiz: TestQuiz, questionData: any): Promise<Question> {
    const question = this.questionRepository.create({
      content: questionData.content,
      options: questionData.options,
      correctOption: questionData.correctOption,
      testQuiz: quiz
    });

    return this.questionRepository.save(question);
  }
  async createQuiz(createTestQuizDto: CreateTestQuizDto): Promise<TestQuiz> {
    const existingQuiz = await this.testQuizRepository.findOne({ where: { title: createTestQuizDto.title } });
  
    if (existingQuiz) {
      throw new BadRequestException(`A quiz with the title "${createTestQuizDto.title}" already exists.`);
    }
  
    return super.create(createTestQuizDto);
  }
  

  async createDomainQuizzes(): Promise<void> {
    const milestones = ['Machine Learning', 'DevOps', 'Sécurité', 'Réseau'];
    for (const title of milestones) {
      const quiz = this.testQuizRepository.create({ title });
      await this.testQuizRepository.save(quiz);
    }
  }

  async findAll(): Promise<TestQuiz[]> {
    return this.testQuizRepository.find();
  }

  async findOne(id: number): Promise<TestQuiz> {
    return this.testQuizRepository.findOneBy({ id: id });
  }

  async findByTitle(title: string): Promise<TestQuiz> {
    return this.testQuizRepository.findOneBy({ title: title });
  }
  async update(id: number, updateTestQuizDto: UpdateTestQuizDto): Promise<TestQuiz> {
    await this.testQuizRepository.update(id, updateTestQuizDto);
    return this.testQuizRepository.findOneBy({ id: id });
  }

  async DeleteQuiz(id: number): Promise<string> {
    const quiz = await this.testQuizRepository.findOne({ where: { id } });
    if (!quiz) {
        return `Quiz with id ${id} does not exist.`;
    }

    await this.testQuizRepository.delete(id);
    return `Quiz with id ${id} has been successfully deleted.`;
}
  async seedTestQuizzes() {
    const filePath = path.join(__dirname, '../../data/test_quiz.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    const quizData = JSON.parse(rawData);

    for (const quiz of quizData) {
      const testQuiz = this.testQuizRepository.create(quiz);
      await this.testQuizRepository.save(testQuiz);
    }
  }
}