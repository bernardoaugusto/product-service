import { Injectable, NotFoundException } from '@nestjs/common';
import ProductRepository from '../repositories/product.repository';
import { ProductModel } from '../models/product.model';
import { ProductInterface } from '../interfaces/product.interface';
import { GetAllPagedResponseInterface } from '../../../common/interfaces/responses.interface';
import { GetAllProductRequestDTO } from '../dtos/product/request/getAll.product.request.dto';
import { UpdateProductDTO } from '../dtos/product/request/update.product.dto';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  public async create(data: Partial<ProductInterface>): Promise<ProductModel> {
    const product = await this.productRepository.createAndSave(data);

    return product;
  }

  public async getById(id: string): Promise<ProductModel> {
    const product = await this.productRepository.getById(id);

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
      const { data, count } = await this.productRepository.getAllWithPagination(
        queryParams,
      );

      return {
        data,
        count,
      };
    }

    return this.productRepository.getAllWithoutPagination(queryParams);
  }

  //   public async update(
  //     id: string,
  //     data: UpdateProductDTO,
  //   ): Promise<ProductModel> {
  //     const foundProduct = await this.getById(id);

  //     const updates = Object.assign(foundProduct, data);

  //     return await this.productRepository.createAndSave(updates);
  //   }
}
