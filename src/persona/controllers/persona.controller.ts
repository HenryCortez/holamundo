import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PersonaService } from '../services/persona.service';
import { Persona } from '../entities/persona.entity';

@Controller('persona')
export class PersonaController {

    constructor(
        private personaService: PersonaService
    ) {}
    @Get()
    getPersona() {
        return this.personaService.findAll();
    }

   
    @Post()
    createPersona(@Body() body: Persona) {
        return this.personaService.create(body);
    }
    @Put(':id')
    updatePersona(@Param('id')id: string, @Body() body: Persona){
        return this.personaService.update(id, body);
    }
    @Delete(':id')
    deletePersona(@Param('id')id: string) {
        return this.personaService.delete(id);
    }
}
