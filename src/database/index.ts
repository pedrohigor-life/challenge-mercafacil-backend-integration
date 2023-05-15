import { MySQLDataSource } from './datasources/MySQLDataSource';
import { PostgresDataSource } from './datasources/PostgresDataSource';

PostgresDataSource.initialize()
  .then(() => {
    console.log('[POSTGRES] Initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

MySQLDataSource.initialize()
  .then(() => {
    console.log('[MYSQL] Initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
