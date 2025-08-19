import { MigrationInterface, QueryRunner } from 'typeorm';

export class ExampleMigration1680000000001 implements MigrationInterface {
  name = 'ExampleMigration1680000000001';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "example_table" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(255) NOT NULL,
        "created_at" TIMESTAMP DEFAULT now()
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "example_table"`);
  }
}
