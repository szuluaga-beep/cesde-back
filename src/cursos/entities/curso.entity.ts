import { Docente } from "src/docente/entities/docente.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'cursos'
})
export class Curso {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        type: 'varchar'
    })
    nombre: string

    @Column({
        type: 'varchar'
    })
    descripcion: string

    @Column({
        type: 'integer'
    })
    duracionSemanas: number

    @Column({
        type: 'float'
    })
    precioCurso: number

    @Column({
        type: 'date'
    })
    fechaInicio: Date

    @ManyToOne(() => Docente, (docente) => docente.cursos, {
        nullable: false,
        onDelete: "RESTRICT"
    })
    docente: Docente
}
