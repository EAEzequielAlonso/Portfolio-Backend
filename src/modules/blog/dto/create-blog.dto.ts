import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateBlogDto {

    @IsString()
    @IsNotEmpty()
    title: string; 

    @IsString()
    @IsNotEmpty()
    category: string; 

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    link: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsBoolean()
    @IsOptional()
    active?: boolean;
}
