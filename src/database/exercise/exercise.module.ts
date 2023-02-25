import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { exerciseProviders } from './exercise.providers';
import { ExerciseService } from 'src/service/exercise.service';
import { ExerciseController } from 'src/controller/exercise.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...exerciseProviders, ExerciseService],
  controllers: [ExerciseController],
})
export class ExerciseModule {}
