import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';
import { BaseGetAllRequestDTO } from '../../../../../common/dtos/request/base.getAll.request.dto';

const dateFilters = ['created_at', 'updated_at'];
const sortParams = [
  'name',
  'code',
  'description',
  'height',
  'width',
  'depth',
  'volume',
  'net_weight',
  'gross_weight',
  'image_urlCode',
];

export class GetAllJudicialProcessRequestDTO extends BaseGetAllRequestDTO {
  @ApiPropertyOptional({
    type: 'string',
    example: 'name',
  })
  @IsOptional()
  @IsString()
  readonly name?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: 'code',
  })
  @IsOptional()
  @IsString()
  readonly code?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: 'description',
  })
  @IsOptional()
  @IsString()
  readonly description?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: '1',
  })
  @IsOptional()
  @IsNumberString()
  readonly height?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: '1',
  })
  @IsOptional()
  @IsNumberString()
  readonly width?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: '1',
  })
  @IsOptional()
  @IsNumberString()
  readonly depth?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: '1',
  })
  @IsOptional()
  @IsNumberString()
  readonly volume?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: '1',
  })
  @IsOptional()
  @IsNumberString()
  readonly net_weight?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: '1',
  })
  @IsOptional()
  @IsNumberString()
  readonly gross_weight?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: 'www.google.com',
  })
  @IsOptional()
  @IsString()
  readonly image_url?: string;

  @ApiPropertyOptional({
    type: 'string',
    enum: dateFilters,
    example: 'created_at',
  })
  @IsOptional()
  @IsEnum(dateFilters)
  readonly dateFilter?: string;

  @ApiPropertyOptional({
    type: 'string',
    enum: sortParams,
    example: 'created_at',
  })
  @IsOptional()
  @IsEnum(sortParams)
  readonly sortParam?: string;

  constructor(data: any) {
    super(data);
    Object.assign(this, data);
  }
}
