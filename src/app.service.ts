import { Injectable } from '@nestjs/common';
import { CreationDto } from './CreationDto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  create(creationDto: CreationDto): CreationDto {
    return creationDto;
  }
}
