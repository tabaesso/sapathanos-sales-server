import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Product from "./Product";

@Entity('sizes')
class Size {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    product_id: string;

    @Column()
    size_33: number;

    @Column()
    size_34: number;

    @Column()
    size_35: number;

    @Column()
    size_36: number;

    @Column()
    size_37: number;

    @Column()
    size_38: number;

    @Column()
    size_39: number;
    
    @Column()
    size_40: number;

    @Column()
    size_41: number;

    @Column()
    size_42: number;

    @Column()
    size_43: number;

    @Column()
    size_44: number;

    @Column()
    size_45: number;

    @Column()
    size_46: number;

    @Column()
    size_47: number;

    @Column()
    size_48: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(()  => Product, product => product.size)
    @JoinColumn({ name: 'product_id'})
    product: Product;
}

export default Size;