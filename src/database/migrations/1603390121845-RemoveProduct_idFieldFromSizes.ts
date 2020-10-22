import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class RemoveProductIdFieldFromSizes1603390121845 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('sizes', 'product_id')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {      
        await queryRunner.addColumn(
            'sizes',
            new TableColumn({
                name: 'product_id',
                type: 'uuid'
            }),
        )
        
        await queryRunner.createForeignKey('sizes', new TableForeignKey({
            name: 'SizeProduct',
            columnNames: ['product_id'],
            referencedTableName: 'products',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }))
    }
}
