import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecommandedCertificationsService } from './recommanded-certifications.service';
import { CreateRecommandedCertificationDto } from './dto/create-recommanded-certification.dto';
import { UpdateRecommandedCertificationDto } from './dto/update-recommanded-certification.dto';

@Controller('recommanded-certifications')
export class RecommandedCertificationsController {
  constructor(private readonly recommandedCertificationsService: RecommandedCertificationsService) {}

  @Post()
  create(@Body() createRecommandedCertificationDto: CreateRecommandedCertificationDto) {
    return this.recommandedCertificationsService.create(createRecommandedCertificationDto);
  }

  @Get()
  findAll() {
    return this.recommandedCertificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recommandedCertificationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecommandedCertificationDto: UpdateRecommandedCertificationDto) {
    return this.recommandedCertificationsService.update(+id, updateRecommandedCertificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recommandedCertificationsService.remove(+id);
  }
}
