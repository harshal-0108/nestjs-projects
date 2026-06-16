import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Employee {
  @Prop({
    required: true,
  })
  name!: string;

  @Prop({
    required: true,
    unique: true,
  })
  email!: string;

  @Prop({
    required: true,
  })
  department!: string;

  @Prop({
    required: true,
  })
  salary!: number;
}

export const EmployeeSchema =
  SchemaFactory.createForClass(Employee);