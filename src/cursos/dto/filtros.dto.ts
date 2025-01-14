import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";


export class FiltrosDto {

    @IsOptional()
    @IsString()
    @ApiProperty()
    nombreDocente?: string
}