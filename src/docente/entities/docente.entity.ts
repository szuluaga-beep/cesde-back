import { Curso } from "src/cursos/entities/curso.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => Curso, (curso) => curso.docente)
    cursos: Curso[]
}
