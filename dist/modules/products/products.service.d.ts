import { Repository } from 'typeorm';
import { Product } from '../../entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Category } from '../../entities/category.entity';
import { Unit } from '../../entities/unit.entity';
export declare class ProductsService {
    private readonly productRepository;
    private readonly categoryRepository;
    private readonly unitRepository;
    constructor(productRepository: Repository<Product>, categoryRepository: Repository<Category>, unitRepository: Repository<Unit>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<void>;
}
