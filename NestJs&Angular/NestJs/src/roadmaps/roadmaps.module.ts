import { Module } from '@nestjs/common';
import { RoadmapService } from './roadmaps.service';
import { RoadmapsController } from './roadmaps.controller';

import {TestQuiz} from "../test-quiz/entities/test-quiz.entity";
import {Question} from "../questions/entities/question.entity";
import {Milestone} from "../milestone/entities/milestone.entity";
import {Roadmap} from "./entities/roadmap.entity";
import {User} from "../users/entities/user.entity";
import {Validation} from "../validations/entities/validation.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Milestone,Roadmap,User,Validation])],
  controllers: [RoadmapsController],
  providers: [RoadmapService,JwtService
  ],
})
export class RoadmapsModule {}
