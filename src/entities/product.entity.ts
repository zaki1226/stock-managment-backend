import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './category.entity';
import { Unit } from './unit.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ unique: true })
  sku: string;

  @ManyToOne(() => Category, (category) => category.id, { eager: true })
  category: Category;

  @ManyToOne(() => Unit, (unit) => unit.id, { eager: true })
  unit: Unit;
}
