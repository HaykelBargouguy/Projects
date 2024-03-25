import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, DeleteDateColumn } from 'typeorm';
import { Progress } from '../../progress/entities/progress.entity';
import { Validation } from '../../validations/entities/validation.entity';
import { UserRoleEnum } from '../../enums/user-role.enum';


@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column({ length: 50, nullable: false, unique: true })
  username: string;

  @Column({ length: 100, nullable: false })
  password: string;

  @Column({ length: 100, nullable: false, unique: true })
  email: string;

  @Column({
    type:'enum',
    enum:UserRoleEnum,
    default:UserRoleEnum.USER
  })
  role:string

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  @OneToMany(() => Progress, progress => progress.user)
  progress: Progress[]
  @OneToMany(() => Validation, validations => validations.user)
  validations: Progress[]

  @DeleteDateColumn()
  deletedAt: Date;
}
export default User

