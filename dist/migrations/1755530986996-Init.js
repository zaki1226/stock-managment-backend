"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1755530986996 = void 0;
class Init1755530986996 {
    name = 'Init1755530986996';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "test_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cc0413536e3afc0e586996bea40" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "test_entity"`);
    }
}
exports.Init1755530986996 = Init1755530986996;
//# sourceMappingURL=1755530986996-Init.js.map