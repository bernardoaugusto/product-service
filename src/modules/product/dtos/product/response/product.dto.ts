import { ApiProperty } from '@nestjs/swagger';
import { ProductModel } from 'src/modules/Product/models/Product.model';
import { BaseResponseDTO } from '../../../../../common/dtos/response/base.response.dto';
import {
  JudicialNatureType,
  RegisterProcessEnum,
} from '../../../interfaces/Product.interface';

export class ProductResponseDTO extends BaseResponseDTO {
  @ApiProperty({
    type: 'uuid',
    example: 'fb5c9676-4e28-4daa-8efa-375512451f8f',
  })
  readonly profile_id: string;

  @ApiProperty({
    type: 'string',
    example: 'PERFIL FISCAL',
  })
  readonly profile_alias: string;

  @ApiProperty({
    type: 'uuid',
    example: 'fb5c9676-4e28-4daa-8efa-375512451f8f',
  })
  readonly establishment_id: string;

  @ApiProperty({
    type: 'string',
    example: 'Seidor Brasil',
  })
  readonly establishment_alias: string;

  @ApiProperty({
    type: 'string',
    example: '123456789',
  })
  readonly fiscal_number: string;

  @ApiProperty({
    type: 'number',
    example: 2,
  })
  readonly register_type: RegisterProcessEnum;

  @ApiProperty({
    type: 'string',
    example: '123',
  })
  readonly process_number: string;

  @ApiProperty({
    type: 'string',
    example: 'juridic session',
  })
  readonly juridic_session: string;

  @ApiProperty({
    type: 'string',
    example: 'vara',
  })
  readonly vara: string;

  @ApiProperty({
    type: 'string',
    example: '01',
  })
  readonly judicial_nature: JudicialNatureType;

  @ApiProperty({
    type: 'string',
    example: 'description',
  })
  readonly description: string;

  @ApiProperty({
    type: 'string',
    example: 'description',
  })
  readonly judicial_date: string;

  constructor(data: ProductModel) {
    super(data);
    Object.assign(this, data);
  }
}
