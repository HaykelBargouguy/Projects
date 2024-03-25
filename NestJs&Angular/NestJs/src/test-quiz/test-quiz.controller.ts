import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TestQuizService } from './test-quiz.service';
import { CreateTestQuizDto } from './dto/create-test-quiz.dto';
import { UpdateTestQuizDto } from './dto/update-test-quiz.dto';
import { TestQuiz } from './entities/test-quiz.entity';
import { AccessConctrolGuard } from '../Gaurds/roles.guard';

@Controller('quiz')
export class TestQuizController {
  constructor(private readonly testQuizService: TestQuizService) {}

  @Get('testseed')
  seedTestQuizzes() {
    this.testQuizService.seedTestQuizzes();
    return { message: 'Test quizzes seeded successfully' };
  }

  @UseGuards(AccessConctrolGuard)
  @Post()
  createQuiz(@Body() createTestQuizDto: CreateTestQuizDto) {
    this.testQuizService.createQuiz(createTestQuizDto);
    return { message : 'Test quiz created successfully'};
  }
  @UseGuards(AccessConctrolGuard)
  @Post('/createquizzes')
  createDomainQuizzes() {
    this.testQuizService.createDomainQuizzes();
    return { message: 'Domain quizzes created successfully' };
  }
  
  @Get()
  findAll() {
    return this.testQuizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.testQuizService.findOne(id);
  }

  @Get('/title/:title')
  findByTitle(@Param('title') title: string) {
    return this.testQuizService.findByTitle(title);
  }

  @UseGuards(AccessConctrolGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTestQuizDto: UpdateTestQuizDto) {
    this.testQuizService.update(id, updateTestQuizDto);
    return { message: 'Test quiz updated successfully' };
  }

  @UseGuards(AccessConctrolGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    this.testQuizService.DeleteQuiz(id);
    return { message: 'Test quiz deleted successfully' };
  }
  
}