import { Module } from '@nestjs/common';
import { RecommandedCoursesService } from './recommanded-courses.service';
import { RecommandedCoursesController } from './recommanded-courses.controller';

@Module({
  controllers: [RecommandedCoursesController],
  providers: [RecommandedCoursesService],
})
export class RecommandedCoursesModule {}
