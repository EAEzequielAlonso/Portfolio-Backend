import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:"messages"})
export class Message {
    
    @PrimaryGeneratedColumn("uuid")
    id: string 

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    content: string
}
