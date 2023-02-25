import { Controller, Get } from '@nestjs/common';
import { Exercise } from 'src/database/exercise/exercise.entity';
import { ExerciseService } from 'src/service/exercise.service';

@Controller('exercises')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  getExercises(): Promise<Exercise[]> {
    return this.exerciseService.findAll();
  }
}
