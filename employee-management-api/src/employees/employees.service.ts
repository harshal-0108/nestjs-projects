import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Employee } from './schemas/employee.schema';
import { CreateEmployeeDto } from './dto/create-employee.dto';
@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name)
    private employeeModel: Model<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = new this.employeeModel(createEmployeeDto);
    return employee.save();
  }

 async findAll(
  page: number,
  limit: number,
) {
  const skip = (page - 1) * limit;

  return this.employeeModel
    .find()
    .skip(skip)
    .limit(limit);
}

  async findOne(id: string) {
    return this.employeeModel.findById(id);
  }

  async update(id: string, body: any) {
    return this.employeeModel.findByIdAndUpdate(
      id,
      body,
      { new: true },
    );
  }

  async remove(id: string) {
    return this.employeeModel.findByIdAndDelete(id);
  }
}