import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class MessageService {

  constructor (@InjectRepository(Message) private repository: Repository<Message>) {}

  async create(newRegister: Partial<Message>): Promise<Message> {
    const result: Message = await this.repository.save(newRegister);
    if (!result) throw new InternalServerErrorException("No se pudo crear el registro");
    return result
  }

  async findAll(): Promise<Message[]> {
    return await this.repository.find();
  }

  async findOne(id: string): Promise<Message> {
    const result: Message = await this.repository.findOneBy({id});
    if (!result) throw new NotFoundException("Registro no encontrado");
    return result
  }

  async update(id: string, updateRegister: Partial<Message>): Promise<{profileId: string, message: string}> {
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
