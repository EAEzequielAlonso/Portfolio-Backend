import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateActivityDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    content: string

    @IsBoolean()
    @IsOptional()
    active?: boolean
}
