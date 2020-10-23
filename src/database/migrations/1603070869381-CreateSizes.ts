import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSizes1603070869381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'sizes',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'product_id',
                        type: 'uuid',
                    },
                    {
                        name: 'size_33',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_34',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_35',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_36',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_37',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_38',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_39',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_40',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_41',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_42',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_43',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_44',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_45',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_46',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_47',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'size_48',
                        type: 'int',
                        default: 0
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
                        name: 'SizeProduct',
                        columnNames: ['product_id'],
                        referencedTableName: 'products',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sizes')
    }

}
