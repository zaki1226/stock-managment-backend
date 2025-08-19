import { Repository } from 'typeorm';
import { Category } from '../../entities/category.entity';
export declare class CategoriesService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    create(data: Partial<Category>): Promise<Category>;
    update(id: string, data: Partial<Category>): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
