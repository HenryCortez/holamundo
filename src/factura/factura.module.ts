import { Module } from '@nestjs/common';
import { FacturaController } from './controllers/factura.controller';
import { FacturaService } from './services/factura.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from './entities/factura.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Factura])
  ],
  controllers: [FacturaController],
  providers: [FacturaService]
})
export class FacturaModule {}
