import { Category } from './category.entity';
import { Unit } from './unit.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    sku: string;
    category: Category;
    unit: Unit;
}
