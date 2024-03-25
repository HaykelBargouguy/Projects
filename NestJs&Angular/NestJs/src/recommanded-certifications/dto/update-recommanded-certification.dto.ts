import { PartialType } from '@nestjs/mapped-types';
import { CreateRecommandedCertificationDto } from './create-recommanded-certification.dto';

export class UpdateRecommandedCertificationDto extends PartialType(CreateRecommandedCertificationDto) {}
