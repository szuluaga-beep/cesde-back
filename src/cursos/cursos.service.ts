import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { DocenteService } from 'src/docente/docente.service';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>,
    private docenteService: DocenteService

  ) {

  }
  async create(createCursoDto: CreateCursoDto) {
    const curso = this.cursoRepository.create(createCursoDto)

    const docente = await this.docenteService.findOne(createCursoDto.docenteId)
    await this.cursoRepository.save({
      ...curso,
      docente
    })
    return curso
  }

  async findAll() {
    const cursos = await this.cursoRepository.find()
    return cursos
  }

  async findOne(id: string) {
    const curso = await this.cursoRepository.findOneBy({ id })
    if (!curso) throw new NotFoundException()
    return curso
  }

  async update(id: string, updateCursoDto: UpdateCursoDto) {
    await this.findOne(id)
    const cursoActualizado = await this.cursoRepository.preload({
      id,
      ...updateCursoDto
    })
    await this.cursoRepository.save(cursoActualizado)
    return cursoActualizado
  }

  async remove(id: string) {
    await this.findOne(id)
    await this.cursoRepository.delete(id)
  }
}
