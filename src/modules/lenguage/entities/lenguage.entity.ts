import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"lenguages"})
export class Lenguage {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string; 

    @Column()
    level: number

    @Column({default:true})
    active: boolean

    @Column({default:new Date()})
    createdAt: Date
}