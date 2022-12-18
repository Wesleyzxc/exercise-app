import { DataSource } from 'typeorm';
import { Exercise } from './exercise.entity';

export const exerciseProviders = [
  {
    provide: 'EXERCISE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Exercise),
    inject: ['DATA_SOURCE'],
  },
];
