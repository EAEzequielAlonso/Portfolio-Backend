import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Resume } from './entities/resume.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable() 
export class ResumeService {

  constructor (@InjectRepository(Resume) private repository: Repository<Resume>) {}

  async create(newRegister: Partial<Resume>): Promise<Resume> {
    const result: Resume = await this.repository.save(newRegister);
    if (!result) throw new InternalServerErrorException("No se pudo crear el registro");
    return result
  }

  async findAll(): Promise<Resume[]> {
    return await this.repository.find({order: {createdAt: "DESC"}});
  }

  async findOne(id: string): Promise<Resume> {
    const result: Resume = await this.repository.findOneBy({id});
    if (!result) throw new NotFoundException("Registro no encontrado");
    return result
  }

  async update(id: string, updateRegister: Partial<Resume>): Promise<{profileId: string, message: string}> {
    const result: UpdateResult = await this.repository.update(id, updateRegister);
    if (result.affected === 1) return {profileId: id, message: "Registro actualizado correctamente"}
    throw new NotFoundException ("Registro no encontrado");
  }

  async remove(id: string): Promise<{profileId: string, message: string}> {
    const result: DeleteResult = await this.repository.delete(id);
    if (result.affected === 1) return {profileId: id, message: "Registro eliminado correctamente"}
    throw new NotFoundException ("Registro no encontrado");
  }
}
