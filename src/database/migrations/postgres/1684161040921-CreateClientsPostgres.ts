import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClientsPostgres1684161040921 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },

          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'password',
            type: 'varchar',
          },

          {
            name: 'client',
            type: 'varchar',
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clients');
  }
}
