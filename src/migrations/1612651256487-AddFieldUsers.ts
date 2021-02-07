import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddFieldUsers1612651256487 implements MigrationInterface {
  name = 'AddFieldUsers1612651256487';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "password" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
  }
}
