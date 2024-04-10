import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from '../entities/persona.entity';

@Injectable()
export class PersonaService {
    constructor(  
        @InjectRepository(Persona) private personaRepository: Repository<Persona>
    ) {}

    findAll() {
        return this.personaRepository.find();
    }
   
    create(body: Persona) {
        const persona = this.personaRepository.create(body);
   
        return this.personaRepository.save(persona);
    }

    async update(id: string, body: Persona) {
        await this.personaRepository.update(id, body);
         return true;
    }
    async delete(id: string) {
        await this.personaRepository.delete(id);
        return true;
    }
}
