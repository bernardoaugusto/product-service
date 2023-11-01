import { Repository } from 'typeorm';
import { ProductInterface } from '../interfaces/product.interface';
import { ProductModel } from '../models/product.model';
import { InjectRepository } from '@nestjs/typeorm';

export default class ProductRepository extends Repository<ProductModel> {
  constructor(
    @InjectRepository(ProductModel)
    private productRepository: Repository<ProductModel>,
  ) {
    super(
      productRepository.target,
      productRepository.manager,
      productRepository.queryRunner,
    );
  }

  public async createAndSave(
    data: Partial<ProductInterface>,
  ): Promise<ProductModel> {
    const product = this.productRepository.create(data);

    return this.productRepository.save(product);
  }

  public async getById(id: string): Promise<ProductModel> {
    return this.productRepository.findOne({ where: { id } });
  }

  public async getAllWithPagination(
    options: any,
  ): Promise<{ data: ProductModel[]; count: number }> {
    const [data, count] = await this.productRepository.findAndCount({
      ...options,
    });

    return { data, count };
  }

  public async getAllWithoutPagination(options: any): Promise<ProductModel[]> {
    return this.productRepository.find({
      ...options,
    });
  }

  public async deleteById(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
