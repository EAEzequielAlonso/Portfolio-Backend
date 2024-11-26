import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateProjectDto {

    @IsString()
    @IsNotEmpty()
    name: string; 

    @IsString()
    @IsNotEmpty()
    category: string; 

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    link: string;
}
