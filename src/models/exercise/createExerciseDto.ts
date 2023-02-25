import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateExerciseDto {
  @IsNotEmpty()
  @MaxLength(20)
  name: string;

  @IsNotEmpty()
  description: string;
}
