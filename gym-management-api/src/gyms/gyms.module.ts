import { Module }
from '@nestjs/common';

import { MongooseModule }
from '@nestjs/mongoose';

import {
  Gym,
  GymSchema,
}
from './schemas/gym.schema';

import { GymsController }
from './gyms.controller';

import { GymsService }
from './gyms.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Gym.name,
        schema: GymSchema,
      },
    ]),
  ],

  controllers: [
    GymsController,
  ],

  providers: [
    GymsService,
  ],

  exports: [
    MongooseModule,
  ],
})
export class GymsModule {}