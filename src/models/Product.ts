import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToOne
} from 'typeorm';
import Category from './Category';
import Seller from './Seller';
import Size from './Size';

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    size_id: string;

    @Column()
    category_id: string;

    @Column()
    seller_id: string;

    @Column()
    description: string;

    @Column()
    color: string;

    @Column()
    material: string;

    @Column()
    price: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    status: number;

    @ManyToOne(() => Category, category => category.products)
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @OneToOne(type => Size, product => Product)
    @JoinColumn({ name: 'size_id' })
    size: Size;

    @ManyToOne(() => Seller, seller => seller.products)
    @JoinColumn({ name: 'seller_id' })
    seller: Seller;
}

export default Product;
