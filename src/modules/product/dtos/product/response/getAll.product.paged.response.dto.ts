import { ApiProperty } from '@nestjs/swagger';
import { JudicialProcessModel } from '../../../models/judicialProcess.model';
import { GetAllPagedResponseDTO } from '../../../../../common/dtos/response/getAll.paged.response.dto';
import { JudicialProcessResponseDTO } from './product.dto';

export class GetAllJudicialProcessPagedResponseDTO extends GetAllPagedResponseDTO {
  @ApiProperty({
    description: 'JudicialProcess Data',
    type: [JudicialProcessResponseDTO],
  })
  readonly data: JudicialProcessModel[];

  constructor(data: any) {
    super(data);
    Object.assign(this, data);
  }
}
