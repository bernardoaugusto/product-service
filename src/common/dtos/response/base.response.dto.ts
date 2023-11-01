import { ApiProperty } from '@nestjs/swagger';

export class BaseResponseDTO {
  @ApiProperty({
    type: 'uuid',
    example: 'fb5c9676-4e28-4daa-8efa-375512451f8f',
  })
  readonly id: string;

  @ApiProperty({
    type: 'string',
    example: new Date().toISOString(),
  })
  readonly created_at: Date;

  @ApiProperty({
    type: 'string',
    example: new Date().toISOString(),
  })
  readonly updated_at: Date;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
