import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"projects"})
export class Project {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string; 

    @Column()
    category: string; 

    @Column()
    link: string;
    
    @Column()
    image: string; 

    @Column({default:new Date()})
    createdAt: Date
}