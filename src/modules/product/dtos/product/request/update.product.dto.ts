import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateJudicialProcessDTO {
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
  @IsNumber()
  readonly height?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  readonly width?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  readonly depth?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  readonly volume?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  readonly net_weight?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  readonly gross_weight?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: 'www.google.com',
  })
  @IsOptional()
  @IsString()
  readonly image_url?: string;
}
