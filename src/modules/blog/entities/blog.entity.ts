import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"blogs"})
export class Blog {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string; 

    @Column()
    category: string; 

    @Column()
    link: string;
    
    @Column()
    image: string; 

    @Column()
    content: string;

    @Column({default:true})
    active: boolean; 

    @Column({default:new Date()})
    createdAt: Date
}