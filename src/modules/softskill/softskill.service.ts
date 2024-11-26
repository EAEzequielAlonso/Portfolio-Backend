import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Softskill } from './entities/softskill.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class SoftskillService {
  
  constructor (@InjectRepository(Softskill) private softskillRepository: Repository<Softskill>) {}
  
  async create(softskill: Partial<Softskill>): Promise<Softskill> {
    const result: Softskill = await this.softskillRepository.save(softskill);
    if (!result) throw new InternalServerErrorException("No se pudo crear el soft skill");
    return result
  }

  async findAll(): Promise<Softskill[]> {
    return await this.softskillRepository.find({order: {createdAt: "DESC"}});
  }

  async findOne(id: string): Promise<Softskill> {
    const result: Softskill = await this.softskillRepository.findOneBy({id});
    if (!result) throw new NotFoundException("Soft skill no encontrado");
    return result
  }

  async update(id: string, softskill: Partial<Softskill>): Promise<{profileId: string, message: string}> {
    const result: UpdateResult = await this.softskillRepository.update(id, softskill);
    if (result.affected === 1) return {profileId: id, message: "Soft skill actualizado correctamente"}
    throw new NotFoundException ("Soft skill no encontrado");
  }

  async remove(id: string): Promise<{profileId: string, message: string}> {
    const result: DeleteResult = await this.softskillRepository.delete(id);
    if (result.affected === 1) return {profileId: id, message: "Soft skill eliminado correctamente"}
    throw new NotFoundException ("Soft skill no encontrado");
  }
}
