import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { FiltrosDto } from './dto/filtros.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) { }

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursosService.create(createCursoDto);
  }

  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Get('docente')
  findAllByDocente(
    @Query() filtros:FiltrosDto
  ) {
    return this.cursosService.findAllByDocente(filtros);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.cursosService.findOne(id);
  }

  @Get('/nombre-curso/:nombre')
  findOneByName(@Param('nombre') nombre: string) {
    return this.cursosService.findOneByName(nombre);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursosService.update(id, updateCursoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.cursosService.remove(id);
  }
}
