import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
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

  async search(q: string) {
    const products = await this.productRepository.find({
      where: { name: Like(`%${q}%`) },
      relations: ['categories'],
    });
    if (!products) {
      throw new NotFoundException(`Search not found!`);
    }

    return products;
  }

  async findByCategory(category: string) {
    const products = await this.categoryRepository.findOne({
      where: { name: category },
      relations: ['products'],
    });
    if (!products) {
      throw new NotFoundException(`Category ID ${category} not found!`);
    }

    return products;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const categories =
      updateProductDto.categories &&
      (await Promise.all(
        updateProductDto.categories.map((category) =>
          this.preloadCategoryByName(category.name),
        ),
      ));

    await this.findOne(id);
    // return this.userRepository.update(id, { ...updateUserDto });

    return this.productRepository.update(id, {
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
