import { Injectable }
from '@nestjs/common';

import { InjectModel }
from '@nestjs/mongoose';

import { Model }
from 'mongoose';

import { Gym }
from './schemas/gym.schema';

import { CreateGymDto }
from './dto/create-gym.dto';

@Injectable()
export class GymsService {

  constructor(
    @InjectModel(Gym.name)
    private gymModel:
      Model<Gym>,
  ) {}

  async create(
    createGymDto:
      CreateGymDto,
  ) {
    return this.gymModel.create(
      createGymDto,
    );
  }

  async findAll() {
    return this.gymModel.find();
  }
}