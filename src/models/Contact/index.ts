import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        type: "varchar",
        length: 255,
    })
    name: string

    @Column({
        type: "varchar",
        length: 255,
    })
    city: string

    @Column({
        type: "varchar",
        length: 2.
    })
    state: string
}