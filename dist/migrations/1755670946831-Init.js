"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1755670946831 = void 0;
class Init1755670946831 {
    name = 'Init1755670946831';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "unit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_5618100486bb99d78de022e5829" UNIQUE ("name"), CONSTRAINT "PK_4252c4be609041e559f0c80f58a" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "unit"`);
    }
}
exports.Init1755670946831 = Init1755670946831;
//# sourceMappingURL=1755670946831-Init.js.map