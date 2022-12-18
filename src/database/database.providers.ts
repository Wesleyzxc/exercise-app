import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'test',
        entities: [__dirname + '/../**/*.entity.ts'],
        synchronize: true, // shouldnt be used in prod
      });

      return dataSource.initialize();
    },
  },
];
