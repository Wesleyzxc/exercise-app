import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { exerciseProviders } from './exercise.providers';
import { ExerciseService } from 'src/service/exercise.service';

@Module({
  imports: [DatabaseModule],
  providers: [...exerciseProviders, ExerciseService],
})
export class ExerciseModule {}
