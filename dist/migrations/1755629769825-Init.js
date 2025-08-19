"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1755629769825 = void 0;
class Init1755629769825 {
    name = 'Init1755629769825';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "identifier" character varying, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "category"`);
    }
}
exports.Init1755629769825 = Init1755629769825;
//# sourceMappingURL=1755629769825-Init.js.map