import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';

import {
  Document,
  Types,
} from 'mongoose';
import { Gym } from '../../gyms/schemas/gym.schema';

@Schema()
export class Membership extends Document {

  @Prop({
    required: true,
  })
  type!: string;

  @Prop({
    required: true,
  })
  price!: number;

 @Prop({
  type: Types.ObjectId,
  ref: Gym.name,
})
gym!: Types.ObjectId;
}

export const MembershipSchema =
  SchemaFactory.createForClass(
    Membership,
  );