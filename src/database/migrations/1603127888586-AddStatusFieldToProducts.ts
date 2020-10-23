import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddStatusFieldToProducts1603127888586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'products',
            new TableColumn({
                name: 'status',
                type: 'int',
                default: 0
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('products', 'status')
    }
}
