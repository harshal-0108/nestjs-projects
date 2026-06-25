import { Prop, Schema, SchemaFactory }
from '@nestjs/mongoose';

import { Document }
from 'mongoose';

@Schema()
export class Gym extends Document {

  @Prop({
    required: true,
    index: true,
  })
  name!: string;

  @Prop({
    required: true,
  })
  location!: string;
}

export const GymSchema =
  SchemaFactory.createForClass(
    Gym,
  );