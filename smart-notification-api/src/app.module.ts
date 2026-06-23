import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import {
  ThrottlerModule,
  ThrottlerGuard,
} from '@nestjs/throttler';

import { AuthModule } from './auth/auth.module';
import { NotificationModule } from './notification/notification.module';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo';

import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      autoSchemaFile: join(
        process.cwd(),
        'src/schema.gql',
      ),

      playground: true,

      context: ({ req }) => ({
        req,
      }),
    }),

    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 5,
      },
    ]),

    AuthModule,
    NotificationModule,
  ],

  providers: [],
    //{
      //provide: APP_GUARD,
      //useClass: ThrottlerGuard,
    //},
  //],
})
export class AppModule {}