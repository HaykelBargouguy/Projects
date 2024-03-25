import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';

import { Question } from './entities/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestQuiz } from '../test-quiz/entities/test-quiz.entity';
import { JwtService } from '@nestjs/jwt';
import { ValidationsService } from '../validations/validations.service';
import { Validation } from '../validations/entities/validation.entity';
import User from '../users/entities/user.entity';
import { Milestone } from '../milestone/entities/milestone.entity';
import { ProgressService } from 'src/progress/progress.service';
import { Roadmap } from 'src/roadmaps/entities/roadmap.entity';
import { Progress } from 'src/progress/entities/progress.entity';
import { MilestoneService } from 'src/milestone/milestone.service';

@Module({
  imports:[TypeOrmModule.forFeature([Question,TestQuiz,Validation,User,Milestone,Roadmap,Progress])],
  controllers: [QuestionsController],
  providers: [QuestionsService,JwtService,ValidationsService,ProgressService,MilestoneService],
})
export class QuestionsModule {}