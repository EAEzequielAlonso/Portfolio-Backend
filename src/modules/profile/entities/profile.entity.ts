import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:"profiles"})
export class Profile {
    
    @PrimaryGeneratedColumn("uuid")
    id: string 

    @Column()
    name: string

    @Column()
    speciality: string

    @Column()
    phone: string

    @Column()
    email: string

    @Column()
    birthDay: string

    @Column()
    location: string

    @Column({default: new Date()})
    createdAt: Date

    @Column({nullable:true})
    updateAt: Date
}
