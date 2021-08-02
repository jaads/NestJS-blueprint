import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreationDto } from './CreationDto';

@Controller()
@ApiTags('Test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get object' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @ApiOperation({ summary: 'Create object' })
  create(@Body() creationDto: CreationDto) {
    return this.appService.create(creationDto);
  }
}
