import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import {
  Membership,
  MembershipSchema,
} from './schemas/membership.schema';

import {
  Gym,
  GymSchema,
} from '../gyms/schemas/gym.schema';

import { MembershipsController } from './memberships.controller';
import { MembershipsService } from './memberships.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Membership.name,
        schema: MembershipSchema,
      },
      {
        name: Gym.name,
        schema: GymSchema,
      },
    ]),
  ],

  controllers: [
    MembershipsController,
  ],

  providers: [
    MembershipsService,
  ],
})
export class MembershipsModule {}