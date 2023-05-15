import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateContacts1684168068960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    new Table({
      name: 'contacts',
      columns: [
        {
          name: 'id',
          type: 'string',
          isPrimary: true,
          isNullable: false,
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
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contacts');
  }
}
