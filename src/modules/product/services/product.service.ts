import { Injectable, NotFoundException } from '@nestjs/common';
import ProductRepository from '../repositories/product.repository';
import { ProductModel } from '../models/product.model';
import { ProductInterface } from '../interfaces/product.interface';
import { GetAllPagedResponseInterface } from '../../../common/interfaces/responses.interface';
import { GetAllProductRequestDTO } from '../dtos/product/request/getAll.product.request.dto';
import { UpdateProductDTO } from '../dtos/product/request/update.product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductModel)
    private readonly productRepository: Repository<ProductModel>,
  ) {}

  public async create(data: Partial<ProductInterface>): Promise<ProductModel> {
    console.log(this.productRepository);
    const product = await this.productRepository.save(data);

    return product;
  }

  public async getById(id: string): Promise<ProductModel> {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  public async getAll(
    queryParams: GetAllProductRequestDTO,
    withPagination: boolean,
  ): Promise<ProductModel[] | GetAllPagedResponseInterface<ProductModel>> {
    if (withPagination) {
      const [data, count] = await this.productRepository.findAndCount(
        <any>queryParams,
      );

      return {
        data,
        count,
      };
    }

    return this.productRepository.find(<any>queryParams);
  }

  public async update(
    id: string,
    data: UpdateProductDTO,
  ): Promise<ProductModel> {
    const foundProduct = await this.getById(id);

    const updates = Object.assign(foundProduct, data);

    return await this.productRepository.save(updates);
  }

  public async delete(id: string): Promise<void> {
    await this.getById(id);

    await this.productRepository.delete(id);
  }
}
