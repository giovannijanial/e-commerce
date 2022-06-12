import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
    ) {}

    async create(createProductDto: CreateProductDto) {
        const product = await this.productRepository.create(createProductDto);
        return this.productRepository.save(product);
    }

    findAll() {
        return this.productRepository.find();
    }

    findOne(id: string) {
        return '';
    }

    async update(id: string, updateCourseDto: UpdateProductDto) {
        return '';
    }

    async remove(id: string) {
        return '';
    }
}
