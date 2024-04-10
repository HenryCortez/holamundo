import { Injectable } from '@nestjs/common';
import { Factura } from '../entities/factura.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class FacturaService {
    constructor(@InjectRepository(Factura) private facturaRepo: Repository<Factura>) {}
    findAll() {
        return this.facturaRepo.find();
    }
   
    create(body: Factura) {
        const persona = this.facturaRepo.create(body);
   
        return this.facturaRepo.save(persona);
    }

    async update(id: number, body: Factura) {
        await this.facturaRepo.update(id, body);
         return true;
    }
    async delete(id: number) {
        await this.facturaRepo.delete(id);
        return true;
    }
}
