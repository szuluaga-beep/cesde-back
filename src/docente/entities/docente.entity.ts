import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'docentes'
})
export class Docente {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column(
        {
            type: "varchar"
        }
    )
    nombre: string

    @Column({
        type: "int"
    })
    documento: number

    @Column({
        type: "varchar",
        unique: true
    })
    correo: string
}
