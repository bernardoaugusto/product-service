import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDatabaseConfigConnectionQA } from '../../../../config/database/connection';
import { ProductInterface } from '../../interfaces/product.interface';
import { ProductModel } from '../../models/product.model';
import ProductRepository from '../product.repository';
import { buildFakeProduct } from '../../utils/factoryFakeProduct';

let productRepository: ProductRepository;

export const makeSut = async (
  data?: Partial<ProductInterface>,
): Promise<ProductModel> => {
  return productRepository.createAndSave(buildFakeProduct(data));
};

describe('Product Repository Context', () => {
  beforeAll(async () => {
    const databaseOptions = getDatabaseConfigConnectionQA();
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          ...databaseOptions,
          entities: [ProductModel],
        }),
        TypeOrmModule.forFeature([ProductRepository]),
      ],
      providers: [ProductRepository],
    }).compile();
    productRepository = moduleRef.get<ProductRepository>(ProductRepository);
  });

  afterEach(async () => {
    jest.resetAllMocks();
  });

  it('should insert Product', async () => {
    const data = buildFakeProduct();

    console.log(productRepository);
    const sut = await productRepository.createAndSave(data);

    const { created_at, updated_at, ...res } = sut;

    expect(created_at).not.toBeUndefined();
    expect(updated_at).not.toBeUndefined();
    expect(res).toEqual(data);
  });

  // it('should find one Product by id', async () => {
  //   const sut = await makeSut();

  //   const res = await productRepository.getById(sut.id, sut.tenantid);

  //   expect(sut).toEqual(res);
  // });

  // it('should return a list of Product without pagination', async () => {
  //   await makeSut();
  //   await makeSut();

  //   const res = await productRepository.getAllWithoutPagination(
  //     {} as typeorm.OptionsTypeOrmGetAllWithoutPagination,
  //   );

  //   expect(res.length).toBe(2);
  // });

  // it('should return a list of Product with pagination', async () => {
  //   await makeSut();
  //   await makeSut();

  //   const res = await productRepository.getAllWithPagination({
  //     take: 10,
  //     skip: 0,
  //   } as typeorm.OptionsTypeOrmGetAllWithPagination);

  //   expect(res.data).toHaveLength(2);
  //   expect(res.count).toBe(2);
  // });

  // it('should update Product', async () => {
  //   const sut = await makeSut();

  //   const updates = Object.assign(sut, {
  //     description: 'update description',
  //     active: false,
  //     inactivation_date: new Date(),
  //   });

  //   const updated = await productRepository.createAndSave(updates);

  //   expect(updates).toEqual(updated);
  // });
});
