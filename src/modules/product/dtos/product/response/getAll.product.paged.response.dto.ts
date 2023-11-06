import { ApiProperty } from '@nestjs/swagger';
import { ProductModel } from '../../../models/Product.model';
import { GetAllPagedResponseDTO } from '../../../../../common/dtos/response/getAll.paged.response.dto';
import { ProductResponseDTO } from './product.dto';

export class GetAllProductPagedResponseDTO extends GetAllPagedResponseDTO {
  @ApiProperty({
    description: 'Product Data',
    type: [ProductResponseDTO],
  })
  readonly data: ProductModel[];

  constructor(data: any) {
    super(data);
    Object.assign(this, data);
  }
}
