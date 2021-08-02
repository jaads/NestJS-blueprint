import { ApiProperty } from '@nestjs/swagger';

export class CreationDto {
  @ApiProperty({
    description: 'A string for testing',
    minLength: 3,
    default: 'value',
  })
  name: string;

  @ApiProperty({
    description: 'Some number for testing',
    minimum: 1,
    maximum: 100,
    default: 42,
  })
  a_number: number;
}
