import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"activities"})
export class Activity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    content: string

    @Column({default:true})
    active: boolean

    @Column({default: new Date()})
    createdAt: Date
}
