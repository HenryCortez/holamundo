import { Module } from '@nestjs/common';

import { PersonaModule } from './persona/persona.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaModule } from './factura/factura.module';
import { DetallesModule } from './detalles/detalles.module';


@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port:  5432,
      username: 'postgres',
      password: 'salito2014',
      database: 'entidades',
      entities: ['dist/**/*.entity{.js, .ts}'], // Lista de entidades de TypeORM
      synchronize: true, // Sincroniza automáticamente las entidades con la base de datos
      logging: true
    }),
   PersonaModule,
   FacturaModule,
   DetallesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
