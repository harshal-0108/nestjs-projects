import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users = [
    {
      id: 1,
      name: 'Harshal',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Amit',
      role: 'user',
    },
  ];

  getUser(id: number) {
    return this.users.find(
      user => user.id === id,
    );
  }
}