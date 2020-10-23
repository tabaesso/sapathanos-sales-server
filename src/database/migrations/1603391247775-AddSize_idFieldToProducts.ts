import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddSizeIdFieldToProducts1603391247775 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'products',
            new TableColumn({
                name: 'size_id',
                type: 'uuid'
            }),
        )
        
        await queryRunner.createForeignKey('products', new TableForeignKey({
            name: 'ProductSize',
            columnNames: ['size_id'],
            referencedTableName: 'sizes',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {      
        await queryRunner.dropColumn('products', 'size_id')
    }
}
