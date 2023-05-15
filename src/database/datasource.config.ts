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

const MySQLDataSource = new DataSource({
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'admin',
  password: 'admin',
  database: 'admin',
  migrations: ['./src/database/migrations/mysql/*.ts'],
  entities: ['./src/modules/**/entities/postgres/*.ts'],
  synchronize: true,
});

export { PostgresDataSource, MySQLDataSource };
