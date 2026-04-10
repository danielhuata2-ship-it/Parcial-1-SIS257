import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar', { length: 6 })
  ci: string;

  @Column('varchar', { length: 50 })
  nombres: string;

  @Column('varchar', { length: 50 })
  primerApellido: string;

  @Column('varchar', { length: 50 })
  segundoApellido: string;

  @CreateDateColumn({ name: 'fecha_nacimiento' })
  fechaNacimiento: Date;
}
