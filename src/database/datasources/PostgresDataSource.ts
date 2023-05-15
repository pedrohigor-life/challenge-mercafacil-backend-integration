import { DataSource } from 'typeorm';

const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'mercafacil-varejao',
  migrations: ['./src/database/migrations/postgres/*.ts'],
  entities: ['./src/modules/**/entities/postgres/*.ts'],
});

export { PostgresDataSource };
