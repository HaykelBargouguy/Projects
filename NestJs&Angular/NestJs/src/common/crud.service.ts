import { Repository, DeepPartial, FindOneOptions, DeleteResult } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { find } from 'rxjs';

export class CrudService<T> {
  constructor(private repository: Repository<T>) {}

 async create(createDto: DeepPartial<T>): Promise<T> {
    const newEntity = this.repository.create(createDto as DeepPartial<T>);
    return await this.repository.save(newEntity);
  }
  

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

    async findOne(id: any): Promise<T | undefined> {
      const findOneOptions: FindOneOptions = {
        where: { id: id },
      };
      return await this.repository.findOne(findOneOptions);
    }

   

  async update(id: any, updateDto: DeepPartial<T>): Promise<T> {
    const findOneOptions: FindOneOptions = {
      where: { id:  id },
    };

    const existingEntity = await this.repository.findOne(findOneOptions)
    if (!existingEntity) {
      throw new NotFoundException(`Entity with ID ${id} not found.`);
    }

    Object.assign(existingEntity, updateDto);
    return this.repository.save(existingEntity);
  }

  async remove(id: any): Promise<DeleteResult> {
    const findOneOptions = { where: { id: id } };
    const existingEntity = await this.repository.findOne(findOneOptions);

    if (!existingEntity) {
      throw new NotFoundException();
    }

    return await this.repository.delete(id);
}

async removewithsoft(id: any): Promise<DeleteResult> {
  const findOneOptions = { where: { id: id } };
  const existingEntity = await this.repository.findOne(findOneOptions);

  if (!existingEntity) {
    throw new NotFoundException();
  }

  return await this.repository.softDelete(id);
}

}