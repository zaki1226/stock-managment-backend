import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Init1755529768988 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
