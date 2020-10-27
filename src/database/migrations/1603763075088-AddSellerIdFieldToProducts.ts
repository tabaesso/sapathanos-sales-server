import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddSellerIdFieldToProducts1603763075088 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
        'products',
        new TableColumn({
            name: 'seller_id',
            type: 'uuid'
        }),
    )

    await queryRunner.createForeignKey('products', new TableForeignKey({
        name: 'ProductSeller',
        columnNames: ['seller_id'],
        referencedTableName: 'sellers',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }))
  }

public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('products', 'seller_id')
  }

}
