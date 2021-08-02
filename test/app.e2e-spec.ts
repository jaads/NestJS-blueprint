import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { CreationDto } from 'src/CreationDto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('/ (POST)', () => {
    it('should create object', () => {
      const testObj: CreationDto = {
        name: 'some name',
        a_number: 3,
      };
      return request(app.getHttpServer())
        .post('/')
        .send(testObj)
        .expect(201)
        .expect(testObj);
    });
    it('should notice invalid body', () => {
      const testObj: CreationDto = {
        name: 'so',
        a_number: 1,
      };
      return request(app.getHttpServer()).post('/').send(testObj).expect(400);
    });
  });
});
