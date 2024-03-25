import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import {Repository} from "typeorm";
import {Milestone} from "./entities/milestone.entity";

import {TestQuiz} from "../test-quiz/entities/test-quiz.entity";
import {User} from "../users/entities/user.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Roadmap } from '../roadmaps/entities/roadmap.entity';
import { privateDecrypt } from 'crypto';
import { CrudService } from '../common/crud.service';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class MilestoneService  extends CrudService<Milestone>{
  constructor(
      @InjectRepository(Milestone)
      private milestoneRepository: Repository<Milestone>,
      @InjectRepository(TestQuiz)
      private testQuizRepository: Repository<TestQuiz>,
      @InjectRepository(Roadmap)
      private roadmapRepository:Repository<Roadmap>
  ) {
    super(milestoneRepository)
  }
  async create(createMilestoneDto:CreateMilestoneDto):Promise<Milestone>{
  const {id,roadmapId,description,orderNumber}=createMilestoneDto
  const roadmap = await this.roadmapRepository.findOne({ where: { id: roadmapId } });
  let testquiz=await this.testQuizRepository.findOne({ where: { title:id } })
  let milestone= new Milestone()
  if (!roadmap) {
    throw new NotFoundException('Roadmap not found.');
  }
  if(!testquiz){
    const title=id
    testquiz=await this.testQuizRepository.save({title})
  }
    milestone.roadmap=roadmap
    milestone.quiz=testquiz
    milestone.orderNumber=orderNumber
    milestone.id=id
    milestone.description=description
  return await this.milestoneRepository.save(milestone)
  }
  async findMilestonesByRoadmap(roadmapId: string): Promise<Milestone[]> {
    return this.milestoneRepository.find({
      where: { roadmap: { id: roadmapId } },
      relations: ['quiz'],
      order: {
        orderNumber: 'ASC' 
      },
      select: ['id', 'description', 'orderNumber', 'createdAt', 'updatedAt', 'deletedAt', 'quiz'] 

    });
  }

  async deleteMilestone(id: string): Promise<string> {
    try {
        await super.removewithsoft(id);
        return `Milestone with ID "${id}" has been successfully deleted`;
    } catch (error) {
        if (error instanceof NotFoundException) {
            return `Milestone with ID "${id}" not found`;
        }
        throw error; 
    }
}
  

async deleteMilestonev2(id: string): Promise<string > {
  try {
    await super.removewithsoft(id);
    return `Milestone with ID "${id}" has been successfully deleted`;
} catch (error) {
    if (error instanceof NotFoundException) {
        return `Milestone with ID "${id}" not found`;
    }
    throw error; 
}}


  async seedMilestones() {
    const filePath = path.join(__dirname, '../../data/milestone.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    const milestoneData = JSON.parse(rawData);

    for (const mData of milestoneData) {
      const milestone = new Milestone();
      console.log(milestone)
      milestone.description = mData.description;
      milestone.orderNumber = mData.orderNumber;
      milestone.id=mData.title
      const roadmap = await this.roadmapRepository.findOne({
        where: { id: mData.roadmapId}
      });

      if (roadmap) {
        milestone.roadmap =roadmap;
      } else {
         console.warn(`TestQuiz "${mData.roadmapId}" not found for question.`);
      }
      const testQuiz = await this.testQuizRepository.findOne({
        where: { title: mData.quizId }
      });

      if (testQuiz) {
        milestone.quiz = testQuiz;
        console.log(milestone.quiz)
      } else {
         console.warn(`TestQuiz "${mData.quizId}" not found for question.`);
      }
      await this.milestoneRepository.save(milestone);
    }
  } 
}
