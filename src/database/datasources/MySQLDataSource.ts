import { DataSource } from 'typeorm';

const MySQLDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'admin',
  password: 'admin',
  database: 'admin',
  migrations: ['./src/database/migrations/mysql/*.ts'],
  entities: ['./src/modules/**/entities/mysql/*.ts'],
  synchronize: true,
});

export { MySQLDataSource };
