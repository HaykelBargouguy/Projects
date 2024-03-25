import { Module } from '@nestjs/common';
import { ValidationsService } from './validations.service';
import { ValidationsController } from './validations.controller';
import {Validation} from "./entities/validation.entity";

import {UsersService} from "../users/users.service";
import {MilestoneService} from "../milestone/milestone.service";
import {User} from "../users/entities/user.entity";
import {Milestone} from "../milestone/entities/milestone.entity";
import {Roadmap} from "../roadmaps/entities/roadmap.entity";
import {TestQuiz} from "../test-quiz/entities/test-quiz.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '../questions/entities/question.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Validation,User,Milestone, Roadmap,TestQuiz,Question])],
  controllers: [ValidationsController],
  providers: [ValidationsService,JwtService],
  exports:[ValidationsService]
})
export class ValidationsModule {}
