import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { FacturaService } from '../services/factura.service';
import { Factura } from '../entities/factura.entity';

@Controller('factura')
export class FacturaController {
    constructor(
        private facturaService: FacturaService
    ) {}
    @Get()
    getPersona() {
        return this.facturaService.findAll();
    }

   
    @Post()
    createPersona(@Body() body: Factura) {
        return this.facturaService.create(body);
    }
    @Put(':id')
    updatePersona(@Param('id')id: number, @Body() body: Factura){
        return this.facturaService.update(id, body);
    }
    @Delete(':id')
    deletePersona(@Param('id')id: number) {
        return this.facturaService.delete(id);
    }
}
