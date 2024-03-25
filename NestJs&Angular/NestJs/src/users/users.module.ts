import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Roadmap} from "../roadmaps/entities/roadmap.entity";
import {Progress} from "../progress/entities/progress.entity";
import {Milestone} from "../milestone/entities/milestone.entity";
import {Validation} from "../validations/entities/validation.entity";
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User,Roadmap,Progress,Milestone,Validation])],
  controllers: [UsersController],
  providers: [UsersService,JwtService],
})
export class UsersModule {
}