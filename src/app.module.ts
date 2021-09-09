import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ConfigModule.forRoot(), TasksModule, MongooseModule.forRoot(process.env.MONGODB_URI)],
  controllers: [AppController],
})
export class AppModule {}
