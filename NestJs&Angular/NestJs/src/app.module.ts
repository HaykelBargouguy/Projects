import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoadmapsModule } from './roadmaps/roadmaps.module';
import { ProgressModule } from './progress/progress.module';
import { MilestoneModule } from './milestone/milestone.module';
import { ValidationsModule } from './validations/validations.module';
import { RecommandedCertificationsModule } from './recommanded-certifications/recommanded-certifications.module';
import { RecommandedCoursesModule } from './recommanded-courses/recommanded-courses.module';
import { TestQuizModule } from './test-quiz/test-quiz.module';
import { QuestionsModule } from './questions/questions.module';
import { User } from './users/entities/user.entity';
import { Roadmap } from './roadmaps/entities/roadmap.entity';
import { Progress } from './progress/entities/progress.entity';
import { Validation } from './validations/entities/validation.entity';
import { Milestone } from './milestone/entities/milestone.entity';
import { RecommandedCertification } from './recommanded-certifications/entities/recommanded-certification.entity';
import { RecommandedCourse } from './recommanded-courses/entities/recommanded-course.entity';
import { TestQuiz } from './test-quiz/entities/test-quiz.entity';
import { Question } from './questions/entities/question.entity';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';



const Joi = require('joi');

@Module({
  imports: [UsersModule, RoadmapsModule, ProgressModule, MilestoneModule, ValidationsModule, RecommandedCertificationsModule, RecommandedCoursesModule, TestQuizModule, QuestionsModule
  ,ConfigModule.forRoot({
validationSchema:Joi.object({
  DB_HOST:Joi.string().required(),
  DB_PORT:Joi.number().required(),
  DB_USERNAME:Joi.string().required(),
  DB_DATABASE:Joi.string().required()
}),
}), CommonModule, DatabaseModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
