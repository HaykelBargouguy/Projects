
import {Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put, Req, UseGuards} from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CreateProgressDto } from './dto/create-progress.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';
import { ConfirmUpdateProgressDto } from './dto/confirm-progress.dto';
import { AuthGuard } from '../Gaurds/jwt-auth.guard';
import { User } from '../decorators/user.decorator';


@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService){}
  @UseGuards(AuthGuard)
  @Post('suivreRoadmap')
  create(@Body() createProgressDto: CreateProgressDto, @User() user) {
    createProgressDto.userId = user.id;
    this.progressService.create(createProgressDto);
    return { message: 'Progress created successfully' };
  }
  @UseGuards(AuthGuard)
  @Patch('confirm')
  confirm(@Body() confirmUpdateProgressDto: ConfirmUpdateProgressDto, @User() user) {
    confirmUpdateProgressDto.userId = user.id;
    this.progressService.updateProgressByUserAndRoadmap(confirmUpdateProgressDto);
    return { message: 'Progress confirmed successfully' };
  }

  @Get()
  findAll() {
    return this.progressService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('getprogress/:roadmapId')
  getProgressByUserAndRoadmap(@Param('roadmapId') roadmapId: string, @User() user) {
    return this.progressService.getProgressByUserAndRoadmap(user.id, roadmapId);
  }
  }


