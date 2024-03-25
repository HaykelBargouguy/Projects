import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Milestone } from '../../milestone/entities/milestone.entity';


@Entity()
export class RecommandedCertification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  title: string;

  @Column({nullable:false})
  description: string;

  @Column({nullable:false})
  price: number;

  @Column({nullable:false})
  link: string;

  @ManyToOne(() => Milestone, milestone => milestone.recommandedCertifications)
  milestone: Milestone;
}

