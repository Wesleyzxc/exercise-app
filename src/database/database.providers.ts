import { join } from 'path';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'sqlite',
  database: 'db',
  entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
  migrations: [join(__dirname, '**', 'migrations/**/*{.ts,js}')],
  synchronize: true, // shouldnt be used in prod
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];

export default dataSource;
