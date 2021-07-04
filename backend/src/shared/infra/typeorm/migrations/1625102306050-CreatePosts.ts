import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePosts1625102306050 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'posts',
                columns: [

                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'id_user',
                        type: 'uuid',
                    },
                    {
                        name: 'image',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'description',
                        type: 'varchar(500)',
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default: 'now()',
                    },
                    {
                        name:'updated_at',
                        type:'timestamp',
                        default: 'now()',
                    }
                ]
            })
        )

        await queryRunner.createForeignKey('posts', new TableForeignKey({
            name: 'posts_users',
            columnNames: ['id_user'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey('posts', 'posts_users');

        await queryRunner.dropTable('posts');
    }

}
