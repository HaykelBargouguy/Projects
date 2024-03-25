import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpStatus, UseGuards } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuizAnswersDto } from './dto/quiz-answers.dto';
import { response } from 'express';
import { AccessConctrolGuard } from '../Gaurds/roles.guard';
import { User } from '../decorators/user.decorator';
import { AuthGuard } from '../Gaurds/jwt-auth.guard';


@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}


  @Get('testseed')
  seedQuestions() {
    this.questionsService.seedQuestions();
    return { message: 'Questions seeded successfully' };
  }

  @Get('by-quiz/:quizID')
  getByQuiz(@Param('quizID') quizID: number) {
    return this.questionsService.getQuestionsByQuiz1(quizID);
  }

  @Get('count/:quizId')
  getCountByQuizId(@Param('quizId') quizId: number) {
   return this.questionsService.getCountByQuizId(quizId);

  }
  @UseGuards(AccessConctrolGuard)
  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    this.questionsService.create(createQuestionDto);
    return { message: 'Question created successfully' };
  }

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionsService.findOne(+id);
  }

  @UseGuards(AccessConctrolGuard)
  @Patch(':id')
  updateQuestion1(@Param('id') questionID: number, @Body() updateQuestionDto: UpdateQuestionDto) {
    this.questionsService.updateQuestion(questionID, updateQuestionDto);
    return { message: 'Question updated successfully' };
  }

  @UseGuards(AccessConctrolGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.questionsService.deleteQuestion(+id);
    return { message: 'Question deleted successfully' };
  }
  
  @UseGuards(AccessConctrolGuard)
  @Delete('/soft/:id')
  removesoft(@Param('id') id: string) {
    this.questionsService.deleteQuestionv2(+id);
    return { message: 'Question deleted successfully' };
  }

  
  @UseGuards(AccessConctrolGuard)
  @Post(':id/verify')
  verify(@Param('id') id: string, @Body('answer') answer: number) {
    const verificationResult = this.questionsService.verifyAnswer(+id, answer);
    return { message: 'Verification successful', data: verificationResult };
  }
@UseGuards(AuthGuard)
  @Post('verify-quiz')
  verifyQuiz(@Body() quizAnswersDto: QuizAnswersDto,@User() user) {
    quizAnswersDto.userId=user.id
    return this.questionsService.verifyQuizAnswers(quizAnswersDto);

  }
  
}