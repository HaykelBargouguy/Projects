import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';
import { AccessConctrolGuard } from '../Gaurds/roles.guard';

@Controller('milestone')
export class MilestoneController {
  constructor(private readonly milestoneService: MilestoneService) {
    
  }

  @Get('testseed')
  seedsMilestones() {
    return this.milestoneService.seedMilestones();
  }
  @UseGuards(AccessConctrolGuard)
  @Post()
  create(@Body() createMilestoneDto: CreateMilestoneDto) {
     this.milestoneService.create(createMilestoneDto);
     return {message:'Milestone created successfully'};
  }
  @UseGuards(AccessConctrolGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMilestoneDto: UpdateMilestoneDto) {
    this.milestoneService.update(id, updateMilestoneDto);
    return { message: 'Milestone updated successfully' };
  }

  @Get()
  findAll() {
    return this.milestoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.milestoneService.findOne(id);
  }

  @UseGuards(AccessConctrolGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.milestoneService.deleteMilestone(id);
    return { message: 'Milestone deleted successfully' };
  }

  @UseGuards(AccessConctrolGuard)
  @Delete('/soft/:id')
  removesoft(@Param('id') id: string) {
    this.milestoneService.deleteMilestonev2(id);
    return { message: 'Soft milestone deleted successfully' };
  }

  @Get('byRoadmap/:roadmapId')
  findMilestonesByRoadmap(@Param('roadmapId') roadmapId: string) {
    return this.milestoneService.findMilestonesByRoadmap(roadmapId);
  }

  
}
