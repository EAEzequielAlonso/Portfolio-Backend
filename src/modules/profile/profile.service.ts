import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProfileService {

  constructor (@InjectRepository(Profile) private profileRepository: Repository<Profile>) {}

  async create(perfile: CreateProfileDto): Promise<Profile> {
    return await this.profileRepository.save(perfile);
  }

  async find(): Promise<Profile[]> {
    return await this.profileRepository.find();
  }

  async findById(id:string): Promise<Profile> {
    return await this.profileRepository.findOneBy({id});
  }

  async update(id: string, profile: UpdateProfileDto): Promise<UpdateResult> {
    return await this.profileRepository.update(id, profile);
  }

  async remove(id: string): Promise<{profileId: string, message: string}> {
    const result: DeleteResult = await this.profileRepository.delete(id);
    if (result.affected === 1) return {profileId: id, message: "Perfil eliminado correctamente"}
    throw new NotFoundException ("No se encontro el perfil a eliminar");
  }
}
