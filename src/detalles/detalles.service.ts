import { Injectable } from '@nestjs/common';
import { CreateDetalleDto } from './dto/create-detalle.dto';
import { Detalle } from './entities/detalle.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DetallesService {
  constructor(@InjectRepository(Detalle) private detalleRepo: Repository<Detalle>) {}

  create(createDetalleDto: Detalle) {
    return this.detalleRepo.save(createDetalleDto);
  }

  findAll() {
    return this.detalleRepo.find();
  }


  update(id: number, updateDetalleDto: Detalle) {
    return this.detalleRepo.update(id,updateDetalleDto);
  }

  remove(id: number) {
    return this.detalleRepo.delete(id);
  }
}
