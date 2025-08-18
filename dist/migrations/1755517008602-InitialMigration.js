"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1755517008602 = void 0;
class InitialMigration1755517008602 {
    name = 'InitialMigration1755517008602';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "categories"`);
    }
}
exports.InitialMigration1755517008602 = InitialMigration1755517008602;
//# sourceMappingURL=1755517008602-InitialMigration.js.map