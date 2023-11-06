import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ProductModel } from 'src/modules/Product/models/Product.model';
import { BaseResponseDTO } from '../../../../../common/dtos/response/base.response.dto';

export class ProductResponseDTO extends BaseResponseDTO {
  @ApiProperty({
    type: 'uuid',
    example: 'fb5c9676-4e28-4daa-8efa-375512451f8f',
  })
  readonly id: string;

  @ApiProperty({
    type: 'string',
    example: 'name',
  })
  readonly name: string;

  @ApiProperty({
    type: 'string',
    example: '123456',
  })
  readonly code: string;

  @ApiPropertyOptional({
    type: 'description',
    example: 'description',
  })
  readonly description: string;

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  readonly height: number;

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  readonly width: number;

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  readonly depth: number;

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  readonly volume: number;

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  readonly net_weight: number;

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  readonly gross_weight: number;

  @ApiPropertyOptional({
    type: 'string',
    example: 'www.google.com',
  })
  readonly image_url: string;

  constructor(data: ProductModel) {
    super(data);
    Object.assign(this, data);
  }
}
