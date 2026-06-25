import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GymsModule } from './gyms/gyms.module';
import { MembershipsModule } from './memberships/memberships.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
imports: [
  MongooseModule.forRoot(
    'mongodb://127.0.0.1:27017/gym-management-db',
  ),

  GymsModule,
  UsersModule,
  MembershipsModule,
],
})
export class AppModule {}