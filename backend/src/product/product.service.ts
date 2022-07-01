import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CategoryEntity } from './entities/category.entity';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,

    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    console.log(createProductDto);
    const categories = await Promise.all(
      createProductDto.categories.map((category) =>
        this.preloadCategoryByName(category.name),
      ),
    );

    const product = await this.productRepository.create({
      ...createProductDto,
      categories,
    });
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find({ relations: ['categories'] });
  }

  findAllCategories() {
    console.log('aqui');
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['categories'],
    });
    if (!product) {
      throw new NotFoundException(`Product ID ${id} not found!`);
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const categories =
      updateProductDto.categories &&
      (await Promise.all(
        updateProductDto.categories.map((category) =>
          this.preloadCategoryByName(category.name),
        ),
      ));

    const product = await this.findOne(id);

    return this.productRepository.save({
      ...product,
      ...updateProductDto,
      categories,
    });
  }

  async remove(id: number) {
    const product = await this.findOne(id);

    return this.productRepository.remove(product);
  }

  private async preloadCategoryByName(name: string): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({ where: { name } });

    if (category) {
      return category;
    }

    return this.categoryRepository.create({ name });
  }
}
