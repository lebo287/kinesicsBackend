import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cloudinary from 'cloudinary';

async function bootstrap() {
  const cloud = cloudinary.v2;
  cloud.config({
    cloud_name: 'dnaeyifkg',
    api_key: '754742757875444',
    api_secret: 'lHJ7bS7DhFBPQ2YHB2rFwuPMbUA',
    secure: true,
  });
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
