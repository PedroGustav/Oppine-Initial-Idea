import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateComents1625103863899 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new Table({
            name: 'coments',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    generationStrategy: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'id_user',
                    type: 'uuid'
                },
                {
                    name: 'id_post',
                    type: 'uuid'
                },
                {
                    name: 'coment',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))

        await queryRunner.createForeignKey('coments', new TableForeignKey({
            name: 'coments_user',
            columnNames: ['id_user'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE'
        }))

        await queryRunner.createForeignKey('coments', new TableForeignKey({
            name: 'coments_post',
            columnNames: ['id_post'],
            referencedColumnNames: ['id'],
            referencedTableName: 'posts',
            onDelete: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.dropForeignKey('coments', 'coments_post');

        await queryRunner.dropForeignKey('coments', 'coments_user');

        await queryRunner.dropTable('coments');
    }
    

}
