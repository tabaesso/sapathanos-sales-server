import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1603047717584 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'category_id',
                        type: 'uuid',
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    { 
                        name: 'description',
                        type: 'text'
                    },
                    {
                        name: 'color',
                        type: 'varchar'
                    },
                    {
                        name: 'material',
                        type: 'text'
                    },
                    {
                        name: 'price',
                        type: 'decimal',
                        scale: 2,
                        precision: 6
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'ProductCategory',
                        columnNames: ['category_id'],
                        referencedTableName: 'categories',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
