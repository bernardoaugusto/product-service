import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';
import { RequestGetAllInterface } from 'src/common/interfaces/requests.interface';

export class BaseGetAllRequestDTO {
  @ApiPropertyOptional({
    type: 'string',
    format: 'boolean',
    example: false,
  })
  @IsOptional()
  @IsString()
  @IsEnum(['true', 'false'])
  readonly withPagination: 'true';

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  @IsOptional()
  @IsNumberString()
  readonly page?: string;

  @ApiPropertyOptional({
    type: 'number',
    example: 20,
  })
  @IsOptional()
  @IsNumberString()
  readonly size?: string;

  @ApiPropertyOptional({
    type: 'string',
    enum: ['desc', 'DESC', 'asc', 'ASC'],
    example: 'desc',
  })
  @IsOptional()
  @IsEnum(['desc', 'DESC', 'asc', 'ASC'], {
    message: `sortOrder must be one of: ${['desc', 'DESC', 'asc', 'ASC']}`,
  })
  readonly sortOrder?: string;

  constructor(data: RequestGetAllInterface) {
    Object.assign(this, data);
  }
}
