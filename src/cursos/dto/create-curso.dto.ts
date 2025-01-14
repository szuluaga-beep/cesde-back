import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID } from "class-validator"

export class CreateCursoDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nombre: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    descripcion: string

    @ApiProperty()
    @IsInt()
    @IsPositive()
    duracionSemanas: number

    @ApiProperty()
    @IsPositive()
    @IsNumber()
    precioCurso: number

    @IsDate()
    @ApiProperty()
    fechaInicio: Date

    @IsInt()
    @ApiProperty()
    @IsUUID()
    docenteId: string
}
