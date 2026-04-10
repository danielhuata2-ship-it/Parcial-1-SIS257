import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Transform } from 'stream';

export class CreatePersonaDto {
  @IsNotEmpty({ message: 'La cedula de identidad es obligatoria' })
  @IsString({ message: 'La cedula de identidad debe ser tipo cadena' })
  @MaxLength(6, {
    message: 'La cedula de identidad no puede tener más de 6 caracteres',
  })
  readonly ci: string;

  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El nombre no puede tener más de 50 caracteres' })
  readonly nombres: string;

  @IsNotEmpty({ message: 'El primer apellido es obligatorio' })
  @IsString({ message: 'El primer apellido debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El primer apellido no puede tener más de 50 caracteres' })
  readonly primerApellido: string;

  @IsNotEmpty({ message: 'El segundo apellido es obligatorio' })
  @IsString({ message: 'El segundo apellido debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El segundo apellido no puede tener más de 50 caracteres' })
  readonly segundoApellido: string;


  readonly fechaNacimiento: Date;
}
