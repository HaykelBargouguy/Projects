import { Injectable } from '@nestjs/common';
import { CreateRecommandedCertificationDto } from './dto/create-recommanded-certification.dto';
import { UpdateRecommandedCertificationDto } from './dto/update-recommanded-certification.dto';

@Injectable()
export class RecommandedCertificationsService {
  create(createRecommandedCertificationDto: CreateRecommandedCertificationDto) {
    return 'This action adds a new recommandedCertification';
  }

  findAll() {
    return `This action returns all recommandedCertifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recommandedCertification`;
  }

  update(id: number, updateRecommandedCertificationDto: UpdateRecommandedCertificationDto) {
    return `This action updates a #${id} recommandedCertification`;
  }

  remove(id: number) {
    return `This action removes a #${id} recommandedCertification`;
  }
}
