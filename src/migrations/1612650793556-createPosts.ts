import {MigrationInterface, QueryRunner} from "typeorm";

export class createPosts1612650793556 implements MigrationInterface {
    name = 'createPosts1612650793556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "filename" character varying NOT NULL, "views" integer NOT NULL, "isPublished" boolean NOT NULL, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_active" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."is_active" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_active" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_active" SET DEFAULT true`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."is_active" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_active" DROP NOT NULL`);
        await queryRunner.query(`DROP TABLE "photo"`);
    }

}
