import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('personas') // Nombre de la tabla
export class Persona {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column({length: 50})
    nombre: string;
    
    @Column()
    apellido: string;
    
    @Column()
    correo: string;
}
