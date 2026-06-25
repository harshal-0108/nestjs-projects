import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: any) {
    return this.userModel.create(createUserDto);
  }

  async findAll() {
    return this.userModel
      .find()
      .populate('gym');
  }

  async findOne(id: string) {
    return this.userModel
      .findById(id)
      .populate('gym');
  }

  async update(id: string, updateUserDto: any) {
    return this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );
  }

  async remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}