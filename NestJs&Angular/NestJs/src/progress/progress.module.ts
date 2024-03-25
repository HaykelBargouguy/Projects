import { Module } from '@nestjs/common';


import {Progress} from "./entities/progress.entity";

import {Milestone} from "../milestone/entities/milestone.entity";
import {Validation} from "../validations/entities/validation.entity";
import {UsersService} from "../users/users.service";
import {RoadmapService} from "../roadmaps/roadmaps.service";
import {User} from "../users/entities/user.entity";
import {Roadmap} from "../roadmaps/entities/roadmap.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgressController } from './progress.controller';
import { CrudService } from '../common/crud.service';
import { ProgressService } from './progress.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '../Gaurds/jwt-auth.guard';


@Module({
  imports: [TypeOrmModule.forFeature([Progress,User,Roadmap,Validation,Milestone])],
  controllers: [ProgressController],
  providers: [ProgressService,JwtService],
  exports: [ProgressService]
})
export class ProgressModule {}
