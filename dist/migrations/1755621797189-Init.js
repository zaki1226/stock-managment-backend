"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1755621797189 = void 0;
class Init1755621797189 {
    name = 'Init1755621797189';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "warehouse" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "address" character varying NOT NULL, "description" character varying, CONSTRAINT "UQ_d5d5470e55d4238b1239e9f154b" UNIQUE ("name"), CONSTRAINT "PK_965abf9f99ae8c5983ae74ebde8" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "warehouse"`);
    }
}
exports.Init1755621797189 = Init1755621797189;
//# sourceMappingURL=1755621797189-Init.js.map