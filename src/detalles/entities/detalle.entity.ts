import { Factura } from 'src/factura/entities/factura.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity('detalles')
export class Detalle {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    producto: string;

    @Column()
    cantidad: number;

    @Column()
    precio: number;

    @ManyToOne(() => Factura, factura => factura.id)
    persona: Factura;
}
