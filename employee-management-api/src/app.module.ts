import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,

      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        MONGO_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),

    MongooseModule.forRoot(
      process.env.MONGO_URI!,
    ),

    EmployeesModule, 
  ],
})
export class AppModule {}