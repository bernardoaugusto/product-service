import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  Allow,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateJudicialProcessDTO {
  @ApiProperty({
    type: 'string',
    example: 'name',
  })
  @Allow()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: 'string',
    example: '123456',
  })
  @Allow()
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiPropertyOptional({
    type: 'description',
    example: 'description',
  })
  @Allow()
  @IsOptional()
  @IsString()
  description: string;

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  @Allow()
  @IsOptional()
  @IsNumber()
  height: number;

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  @Allow()
  @IsOptional()
  @IsNumber()
  width: number;

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  @Allow()
  @IsOptional()
  @IsNumber()
  depth: number;

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  @Allow()
  @IsOptional()
  @IsNumber()
  volume: number;

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  @Allow()
  @IsOptional()
  @IsNumber()
  net_weight: number;

  @ApiPropertyOptional({
    type: 'number',
    example: 1,
  })
  @Allow()
  @IsOptional()
  @IsNumber()
  gross_weight: number;

  @ApiPropertyOptional({
    type: 'string',
    example: 'www.google.com',
  })
  @Allow()
  @IsOptional()
  @IsString()
  image_url: string;
}
