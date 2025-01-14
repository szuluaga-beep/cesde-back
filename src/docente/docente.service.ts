import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocenteService {

  constructor(
    @InjectRepository(Docente)
    private docenteRepository: Repository<Docente>
  ) { }

  async create(createDocenteDto: CreateDocenteDto) {

    const docente = this.docenteRepository.create(createDocenteDto)
    await this.docenteRepository.save(docente)
    return docente
  }

  async findAll() {
    const docentes = await this.docenteRepository.find()
    return docentes
  }

  async findOne(id: string) {
    const docente = await this.docenteRepository.findOneBy({
      id
    })
    if (!docente) throw new NotFoundException()
    return docente
  }

  async update(id: string, updateDocenteDto: UpdateDocenteDto) {
    await this.findOne(id)

    const docenteSalvado= await this.docenteRepository.preload({
      id,
      ...updateDocenteDto
    })
    await this.docenteRepository.save(docenteSalvado)
    return docenteSalvado
  }

  async remove(id: string) {
    await this.findOne(id)

    await this.docenteRepository.delete(id)
    
  }
}
