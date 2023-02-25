import { MigrationInterface, QueryRunner } from 'typeorm';

export class createExerciseTable1671343485511 implements MigrationInterface {
  name = 'createExerciseTable1671343485511';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "exercise" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(500) NOT NULL, "description" text NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "exercise"`);
  }
}
