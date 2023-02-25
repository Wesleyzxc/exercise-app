import { Body, Controller, Get, Post } from '@nestjs/common';
import { Exercise } from 'src/database/exercise/exercise.entity';
import { CreateExerciseDto } from 'src/models/exercise/createExerciseDto';
import { ExerciseService } from 'src/service/exercise.service';

@Controller('exercises')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  getExercises(): Promise<Exercise[]> {
    return this.exerciseService.findAll();
  }

  @Post()
  createExercise(@Body() createExerciseDto: CreateExerciseDto) {
    return this.exerciseService.create(createExerciseDto);
  }
}
