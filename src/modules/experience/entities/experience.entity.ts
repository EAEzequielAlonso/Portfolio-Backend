import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:"experiencies"})
export class Experience {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    start: number

    @Column()
    end: number

    @Column()
    content: string

    @Column({default:true})
    active: boolean

    @Column({default: new Date()})
    createdAt: Date
}
