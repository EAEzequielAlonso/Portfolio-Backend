import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateProfileDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    speciality: string

    @IsString()
    @IsNotEmpty()
    phone: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    birthDay: string

    @IsString()
    @IsNotEmpty()
    location: string

    @IsDateString()
    @IsOptional()
    updateAt: Date
}
