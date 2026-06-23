import {
  ObjectType,
  Field,
  Int,
} from '@nestjs/graphql';

@ObjectType()
export class Notification {

  @Field(() => Int)
  id!: number;

  @Field()
  title!: string;

  @Field()
  message!: string;
}