import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProfileService {

  constructor (@InjectRepository(Profile) private profileRepository: Repository<Profile>) {}
 
  async create(perfile: CreateProfileDto): Promise<Profile> {
    const result: Profile = await this.profileRepository.save(perfile);
    if (!result) throw new InternalServerErrorException("No se pudo crear el Perfil");
    return result
  }

  async findAll(): Promise<Profile[]> {
    return await this.profileRepository.find();
  }

  async findById(id:string): Promise<Profile> {
    const result: Profile = await this.profileRepository.findOneBy({id});
    if (!result) throw new NotFoundException("Perfil no encontrado");
    return result
  }

  async update(id: string, profile: UpdateProfileDto): Promise<{profileId: string, message: string}> {
    const result: UpdateResult = await this.profileRepository.update(id, profile);
    if (result.affected === 1) return {profileId: id, message: "Perfil actualizado correctamente"}
    throw new NotFoundException ("Perfil no encontrado");
  }

  async remove(id: string): Promise<{profileId: string, message: string}> {
    const result: DeleteResult = await this.profileRepository.delete(id);
    if (result.affected === 1) return {profileId: id, message: "Perfil eliminado correctamente"}
    throw new NotFoundException ("Perfil no encontrado");
  }
}
