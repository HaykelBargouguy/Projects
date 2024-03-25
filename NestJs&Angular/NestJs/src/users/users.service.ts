import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Roadmap } from '../roadmaps/entities/roadmap.entity';
import { Milestone } from '../milestone/entities/milestone.entity';
import { CrudService } from '../common/crud.service';
import { Progress } from '../progress/entities/progress.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService extends CrudService<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Progress)
    private progressRepository: Repository<Progress>,
  ) {
    super(userRepository);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async deleteUser(id: string): Promise<string> {
    try {
      await super.remove(id);
      return `User with ID "${id}" has been successfully deleted`;
    } catch (error) {
      if (error instanceof NotFoundException) {
        return `User with ID "${id}" not found`;
      }
      throw error;
    }
  }

  async deleteUserv2(id: string): Promise<string> {
    try {
      await super.removewithsoft(id);
      return `User with ID "${id}" has been successfully deleted`;
    } catch (error) {
      if (error instanceof NotFoundException) {
        return `User with ID "${id}" not found`;
      }
      throw error;
    }
  }

  async getUserById(id: number): Promise<User> {
    const user = await super.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    return user;
  }

  async getTotalScore(userId: number): Promise<number> {
    const userProgresses = await this.progressRepository.find({
      where: { user: { id: userId } },
    });

    return userProgresses.reduce((total, progress) => total + progress.percentage, 0);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const existingUser = await this.getUserById(id);

    if (updateUserDto.username) {
      existingUser.username = updateUserDto.username;
    }

    if (updateUserDto.email) {
      existingUser.email = updateUserDto.email;
    }

    if (updateUserDto.password) {
      existingUser.password = await this.hashPassword(updateUserDto.password);
    }

    return await this.userRepository.save(existingUser);
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }
}
