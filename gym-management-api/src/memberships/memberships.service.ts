import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Membership } from './schemas/membership.schema';

@Injectable()
export class MembershipsService {

  constructor(
    @InjectModel(Membership.name)
    private membershipModel:
      Model<Membership>,
  ) {}

  async create(data: any) {
    return this.membershipModel.create(
      data,
    );
  }

 // async findAll() {
   // return this.membershipModel
     // .find()
      //.populate('gym');
  //}
  async findAll() {
  const data = await this.membershipModel.find();

  console.log(data);

  return data;
}
}