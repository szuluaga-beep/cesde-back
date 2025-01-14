import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { DocenteService } from 'src/docente/docente.service';
import { Docente } from 'src/docente/entities/docente.entity';

@Module({
  controllers: [CursosController],
  providers: [CursosService, DocenteService,],
  imports: [TypeOrmModule.forFeature([Curso, Docente])]
})
export class CursosModule { }
