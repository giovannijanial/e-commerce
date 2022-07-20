/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Pagination } from 'nestjs-typeorm-paginate';
import { join } from 'path';
import { storage } from 'src/utils/Storage';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  index(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(14), ParseIntPipe) limit = 14,
  ): Promise<Pagination<ProductEntity>> {
    limit = limit > 14 ? 14 : limit;
    return this.productService.findAll({ page, limit });
  }

  @Get('categories')
  findAllCategories() {
    return this.productService.findAllCategories();
  }

  @Get('top-rating')
  findTopRating() {
    return this.productService.findTopProducts();
  }

  @Get('last-changed')
  findLastChanged() {
    return this.productService.findLastChanged();
  }

  @Get('search')
  search(@Query('q') q: string) {
    return this.productService.search(q);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Get('categories/:category')
  findByCategory(@Param('category') category: string) {
    return this.productService.findByCategory(category);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', storage))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() data) {
    return this.productService.update(+data.id, { image: file.filename });
  }

  @Get('image/:image')
  findProductImage(@Param('image') image: string, @Res() res) {
    return res.sendFile(join(process.cwd(), 'uploads/imgs-product/' + image));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  //categories
}
