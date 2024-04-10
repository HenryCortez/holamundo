import { Module } from '@nestjs/common';
import { PersonaController } from './controllers/persona.controller';
import { PersonaService } from './services/persona.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Persona])
  ],
  controllers: [PersonaController],
  providers: [PersonaService]
})
export class PersonaModule {}
