import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DetallesService } from './detalles.service';
import { Detalle } from './entities/detalle.entity';

@Controller('detalles')
export class DetallesController {
  constructor(private readonly detallesService: DetallesService) {}

  @Post()
  create(@Body() createDetalleDto: Detalle) {
    return this.detallesService.create(createDetalleDto);
  }

  @Get()
  findAll() {
    return this.detallesService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDetalleDto: Detalle) {
    return this.detallesService.update(+id, updateDetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detallesService.remove(+id);
  }
}
