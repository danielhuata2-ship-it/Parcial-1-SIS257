import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PersonasService {
  constructor(@InjectRepository(Persona) private personaRepository: Repository<Persona>) {}

  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    let persona = await this.personaRepository.findOneBy({
      ci: createPersonaDto.ci.trim(),
      nombres: createPersonaDto.nombres.trim(),
    });
    if(persona) throw new ConflictException('La persona ya existe');

    persona= new Persona();
    Object.assign(persona, createPersonaDto);
    return this.personaRepository.save(persona);
  }

  async findAll(): Promise<Persona[]> {
    return this.personaRepository.find({order: {nombres: 'ASC'}});
  }

 async  findOne(id: number): Promise<Persona> {
    const persona = await this.personaRepository.findOneBy({id});
    if(!persona) throw new ConflictException('La persona no existe');
    return persona;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    const persona = await this.findOne(id);
    Object.assign(persona, updatePersonaDto);
    return this.personaRepository.save(persona);
  }

  async remove(id: number) {
    const persona = await this.findOne(id);
    return this.personaRepository.softDelete(persona);
  }
}
