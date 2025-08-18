"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleMigration1680000000001 = void 0;
class ExampleMigration1680000000001 {
    name = 'ExampleMigration1680000000001';
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE TABLE "example_table" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(255) NOT NULL,
        "created_at" TIMESTAMP DEFAULT now()
      )
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "example_table"`);
    }
}
exports.ExampleMigration1680000000001 = ExampleMigration1680000000001;
//# sourceMappingURL=1680000000001-ExampleMigration.js.map