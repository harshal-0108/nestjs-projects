import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';

import {
  Document,
  Types,
} from 'mongoose';

@Schema()
export class User extends Document {

  @Prop({
    required: true,
  })
  name!: string;

  @Prop({
    required: true,
  })
  email!: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Gym',
  })
  gym!: Types.ObjectId;
}

export const UserSchema =
  SchemaFactory.createForClass(
    User,
  );