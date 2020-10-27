import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Department from "./Department";
import Product from "./Product";

@Entity('categories')
class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    department_id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Department, department => department.categories)
    @JoinColumn({ name: 'department_id' })
    department: Department;

    @OneToMany(() => Product, product => product.category, {
        cascade: ['insert', 'update']
    })
    products: Product[];
}

export default Category;
