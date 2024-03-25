import { Module } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { MilestoneController } from './milestone.controller';
import {Milestone} from "./entities/milestone.entity";

import {TestQuiz} from "../test-quiz/entities/test-quiz.entity";
import {Question} from "../questions/entities/question.entity";
import {Validation} from "../validations/entities/validation.entity";
import {User} from "../users/entities/user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roadmap } from '../roadmaps/entities/roadmap.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Milestone,TestQuiz,Roadmap])],
  controllers: [MilestoneController],
  providers: [MilestoneService,JwtService],
})
export class MilestoneModule {}
