import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateReactions1625103162582 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'reactions',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
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
                        name: 'type',
                        type: 'varchar'
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )

        await queryRunner.createForeignKey('reactions', new TableForeignKey({
            name: 'reactions_posts',
            columnNames: ['id_post'],
            referencedColumnNames: ['id'],
            referencedTableName: 'posts',
            onDelete: 'CASCADE',
        }))

        await queryRunner.createForeignKey('reactions', new TableForeignKey({
            name: 'reactions_users',
            columnNames: ['id_user'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey( 'reactions' ,'reactions_users');

        await queryRunner.dropForeignKey( 'reactions' ,'reactions_posts');

        await queryRunner.dropTable('reactions');

    }

}
