import { IsNotEmpty, IsString } from "class-validator";

export class CreateResumeDto {
    
    @IsString()
    @IsNotEmpty()
    content: string
}
