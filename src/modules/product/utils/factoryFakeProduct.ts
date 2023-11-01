import { ProductInterface } from '../interfaces/product.interface';
import { v4 as uuid } from 'uuid';

export const buildFakeProduct = (
  data?: Partial<ProductInterface>,
): Partial<ProductInterface> => {
  return Object.assign(
    {
      id: uuid(),
      name: 'Product Name',
      code: uuid(),
      description: 'Product Description',
      height: 10,
      width: 10,
      depth: 10,
      volume: 10,
      net_weight: 10,
      gross_weight: 10,
      image_url: 'https://www.google.com/image',
    },
    { ...data },
  ) as ProductInterface;
};
