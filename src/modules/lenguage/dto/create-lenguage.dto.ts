import { IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateLenguageDto {

    @IsString()
    @IsNotEmpty()
    name: string; 

    @IsNumber()
    @IsNotEmpty()
    level: number

    @IsString()
    @IsOptional()
    active?: boolean
}
