import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Exercise } from 'src/database/exercise/exercise.entity';
import { CreateExerciseDto } from 'src/models/exercise/createExerciseDto';

@Injectable()
export class ExerciseService {
  constructor(
    @Inject('EXERCISE_REPOSITORY')
    private exerciseRepository: Repository<Exercise>,
  ) {}

  async findAll(): Promise<Exercise[]> {
    return this.exerciseRepository.find();
  }

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    console.log('🚀 - createExerciseDto:', createExerciseDto);
    return this.exerciseRepository.save(createExerciseDto);
  }
}
