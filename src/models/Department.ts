import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Category from "./Category";

@Entity()
class Department {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Category, category => category.department, { 
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'department_id'})
    categories: Category;
}

export default Department;