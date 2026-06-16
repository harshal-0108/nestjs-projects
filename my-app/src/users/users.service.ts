import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  private users = [
    {
      id: 1,
      name: 'Harshal',
      email: 'harshal@gmail.com',
      age: 20,
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(
      (user) => user.id === id,
    );
  }

  create(user: any) {
    const newUser = {
      id: this.users.length + 1,
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }

  update(id: number, data: any) {
    const user = this.findOne(id);

    if (!user) {
      return 'User not found';
    }

    Object.assign(user, data);

    return user;
  }

  remove(id: number) {
    const index = this.users.findIndex(
      (user) => user.id === id,
    );

    if (index === -1) {
      return 'User not found';
    }

    return this.users.splice(index, 1);
  }
}