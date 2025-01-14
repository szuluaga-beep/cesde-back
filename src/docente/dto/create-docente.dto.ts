import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateDocenteDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nombre: string

    @IsInt()
    @IsPositive()
    @ApiProperty()
    documento: number

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    correo: string
}
