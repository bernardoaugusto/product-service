import { ApiProperty } from '@nestjs/swagger';
import { GetAllPagedResponseInterface } from 'src/common/interfaces/responses.interface';

export class GetAllPagedResponseDTO {
  @ApiProperty({ description: 'Number of total items', type: 'number' })
  readonly count: number;

  @ApiProperty({ description: 'Number of registers returned', type: 'number' })
  readonly limit: number;

  @ApiProperty({ description: 'Page', type: 'number' })
  readonly page: number;

  @ApiProperty({ description: 'Total pages', type: 'number' })
  readonly totalPages: number;

  @ApiProperty({ description: 'data' })
  readonly data: any;

  constructor(data: GetAllPagedResponseInterface<any>) {
    Object.assign(this, data);
  }
}
