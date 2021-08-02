import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreationDto } from './CreationDto';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('create object', () => {
    it('should return provided object', () => {
      const appController = app.get<AppController>(AppController);
      const testObj: CreationDto = {
        name: 'some name',
        a_number: 3,
      };
      expect(appController.create(testObj)).toEqual(testObj);
    });
  });
});
