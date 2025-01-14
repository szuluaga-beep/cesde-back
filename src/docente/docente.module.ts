import { Module } from '@nestjs/common';
import { DocenteService } from './docente.service';
import { DocenteController } from './docente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';

@Module({
  controllers: [DocenteController],
  providers: [DocenteService],
  imports: [TypeOrmModule.forFeature([Docente])]
})
export class DocenteModule { }
