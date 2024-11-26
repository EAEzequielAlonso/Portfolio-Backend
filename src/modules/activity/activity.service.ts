import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ActivityService {
  
  constructor (@InjectRepository(Activity) private activityRepository: Repository<Activity>) {}
  
  async create(activity: Partial<Activity>): Promise<Activity> {
    const result: Activity = await this.activityRepository.save(activity);
    if (!result) throw new InternalServerErrorException("No se pudo crear la actividad");
    return result
  }

  async findAll(): Promise<Activity[]> {
    return await this.activityRepository.find({order: {createdAt:"DESC"}});
  }

  async findOne(id: string): Promise<Activity> {
    const result: Activity = await this.activityRepository.findOneBy({id});
    if (!result) throw new NotFoundException("Actividad no encontrado");
    return result
  }

  async update(id: string, activity: Partial<Activity>): Promise<{profileId: string, message: string}> {
    const result: UpdateResult = await this.activityRepository.update(id, activity);
    if (result.affected === 1) return {profileId: id, message: "Actividad actualizado correctamente"}
    throw new NotFoundException ("Actividad no encontrado");
  }

  async remove(id: string): Promise<{profileId: string, message: string}> {
    const result: DeleteResult = await this.activityRepository.delete(id);
    if (result.affected === 1) return {profileId: id, message: "Actividad eliminado correctamente"}
    throw new NotFoundException ("Actividad no encontrado");
  }
}
