import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, MinLength, Max, Min } from 'class-validator';

export class CreationDto {
  @ApiProperty({
    description: 'A string for testing',
    minLength: 3,
    default: 'value',
  })
  @IsNotEmpty()
  @MinLength(3, {
    message:
      'Value is too short. Minimal length is $constraint1 characters, but actual is $value',
  })
  name: string;

  @ApiProperty({
    description: 'Some number for testing',
    minimum: 1,
    maximum: 100,
    default: 42,
  })
  @IsNumber()
  @Min(1)
  @Max(100)
  a_number: number;
}
