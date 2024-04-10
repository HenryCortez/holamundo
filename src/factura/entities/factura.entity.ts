import { Persona } from 'src/persona/entities/persona.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('facturas') // Nombre de la tabla
export class Factura {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    fecha: Date;

    @Column()
    total: number;

    @ManyToOne(() => Persona, persona => persona.id)
    persona: Persona;

}
