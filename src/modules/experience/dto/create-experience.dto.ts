import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateExperienceDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    start: number

    @IsNumber()
    @IsOptional()
    end?: number

    @IsString()
    @IsNotEmpty()
    content: string

    @IsBoolean()
    @IsOptional()
    active?: boolean
}
