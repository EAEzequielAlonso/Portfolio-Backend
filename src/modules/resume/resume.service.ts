import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Resume } from './entities/resume.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ResumeService {

  constructor (@InjectRepository(Resume) private resumeRepository: Repository<Resume>) {}

  async create(resume: Partial<Resume>): Promise<Resume> {
    const result: Resume = await this.resumeRepository.save(resume);
    if (!result) throw new InternalServerErrorException("No se pudo crear el Resumen");
    return result
  }

  async findAll(): Promise<Resume[]> {
    return await this.resumeRepository.find();
  }

  async findOne(id: string): Promise<Resume> {
    const result: Resume = await this.resumeRepository.findOneBy({id});
    if (!result) throw new NotFoundException("Resumen no encontrado");
    return result
  }

  async update(id: string, resume: Partial<Resume>): Promise<{profileId: string, message: string}> {
    const result: UpdateResult = await this.resumeRepository.update(id, resume);
    if (result.affected === 1) return {profileId: id, message: "Resumen actualizado correctamente"}
    throw new NotFoundException ("Resumen no encontrado");
  }

  async remove(id: string): Promise<{profileId: string, message: string}> {
    const result: DeleteResult = await this.resumeRepository.delete(id);
    if (result.affected === 1) return {profileId: id, message: "Resumen eliminado correctamente"}
    throw new NotFoundException ("Resumen no encontrado");
  }
}
