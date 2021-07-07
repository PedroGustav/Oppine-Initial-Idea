import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateFollows1625104376043 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new Table({
            name: 'follows',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    generationStrategy: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'id_user_send',
                    type: 'uuid'
                },
                {
                    name: 'id_user_receive',
                    type: 'uuid'
                },
                {
                    name: 'state',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
                
        }))

        await queryRunner.createForeignKey('follows', new TableForeignKey({
            name: 'follows_user_send',
            columnNames: ['id_user_send'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE'
        }))

        await queryRunner.createForeignKey('follows', new TableForeignKey({
            name: 'follows_user_receive',
            columnNames: ['id_user_receive'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey('follows', 'follows_user_send');

        await queryRunner.dropForeignKey('follows', 'follows_user_receive');

        await queryRunner.dropTable('follows');
        
    }

}
