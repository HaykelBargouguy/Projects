import {Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards} from '@nestjs/common';
import { RoadmapService } from './roadmaps.service';
import { CreateRoadmapDto } from './dto/create-roadmap.dto';
import { UpdateRoadmapDto } from './dto/update-roadmap.dto';
import { UserRoleEnum } from '../enums/user-role.enum';
import { AuthGuard } from '../Gaurds/jwt-auth.guard';
import { AccessConctrolGuard } from '../Gaurds/roles.guard';


@Controller('roadmaps')
export class RoadmapsController {
  constructor(private readonly roadmapsService: RoadmapService) {}
  @UseGuards(AccessConctrolGuard)
  @Post()
  create(@Body() createRoadmapDto: CreateRoadmapDto) {
    this.roadmapsService.create(createRoadmapDto);
    return { message: 'Roadmap created successfully' };
  }

  @UseGuards(AccessConctrolGuard)
  @Patch(':id')
  update(@Param('id') id, @Body() updateRoadmapDto: UpdateRoadmapDto) {
    this.roadmapsService.update(id, updateRoadmapDto);
    return { message: 'Roadmap updated successfully' };
  }

  @Get()
  findAll() {
    return this.roadmapsService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.roadmapsService.findOne(id);
  }

  @UseGuards(AccessConctrolGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.roadmapsService.deleteRoadmap(id);
    return { message: 'Roadmap deleted successfully' };
  }

  @UseGuards(AccessConctrolGuard)
  @Delete('/soft/:id')
  removesoft(@Param('id') id: string) {
    this.roadmapsService.deleteRoadmapv2(id);
    return { message: 'Roadmap deleted successfully' };
  }
}
