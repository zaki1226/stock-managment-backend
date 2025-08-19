import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<import("../../entities/category.entity").Category[]>;
    findOne(id: string): Promise<import("../../entities/category.entity").Category>;
    create(dto: CreateCategoryDto): Promise<import("../../entities/category.entity").Category>;
    update(id: string, dto: UpdateCategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
