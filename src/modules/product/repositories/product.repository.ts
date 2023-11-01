import { Repository } from 'typeorm';
import { ProductInterface } from '../interfaces/product.interface';
import { ProductModel } from '../models/product.model';

export default class ProductRepository extends Repository<ProductModel> {
  public async createAndSave(
    data: Partial<ProductInterface>,
  ): Promise<ProductModel> {
    const product = this.create(data);

    return this.save(product);
  }

  public async getById(id: string): Promise<ProductModel> {
    return this.findOne({ where: { id } });
  }

  public async getAllWithPagination(
    options: any,
  ): Promise<{ data: ProductModel[]; count: number }> {
    const [data, count] = await this.findAndCount({
      ...options,
    });

    return { data, count };
  }

  public async getAllWithoutPagination(options: any): Promise<ProductModel[]> {
    return this.find({
      ...options,
    });
  }

  public async deleteById(id: string): Promise<void> {
    await this.delete(id);
  }
}
