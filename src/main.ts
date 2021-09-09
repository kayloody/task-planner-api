import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Set CORS to true in case API and APP not on same domain
  const app = await NestFactory.create(
    AppModule,
    {
      cors: {
        origin: [
          "http://localhost:8080",
          process.env.CLIENT_URL
        ]
      }
    }
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
