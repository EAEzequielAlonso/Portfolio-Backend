import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { CloudinaryService } from 'src/serviceImage/cloudinary.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {

  constructor (@InjectRepository(Blog) private repository: Repository<Blog>,
                private readonly cloudinaryService: CloudinaryService) {}

  async create(newRegister: Partial<Blog>, image: Express.Multer.File) {
    const img = await this.cloudinaryService.uploadImage(image);
    const result: Blog = await this.repository.save({...newRegister, image: img.secure_url});
    if (!result) throw new InternalServerErrorException("No se pudo crear el registro");
    return result
  }

  async findAll(): Promise<Blog[]> {
  return await this.repository.find({order: {createdAt: "DESC"}});
  }

  async findOne(id: string): Promise<Blog> {
    const result: Blog = await this.repository.findOneBy({id});
    if (!result) throw new NotFoundException("Registro no encontrado");
    return result
  }

  async update(id: string, updateRegister: Partial<Blog>): Promise<{profileId: string, message: string}> {
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
