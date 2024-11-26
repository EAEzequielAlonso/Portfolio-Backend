import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateMessageDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    content: string
}
