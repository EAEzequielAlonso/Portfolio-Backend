import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"resumes"})
export class Resume {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    content: string
    
    @Column({default: new Date()})
    createdAt: Date 
}
