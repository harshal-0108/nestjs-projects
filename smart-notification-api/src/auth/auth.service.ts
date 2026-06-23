import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private users: any[] = [];

  constructor(
    private jwtService: JwtService,
  ) {}

  async register(user: any) {
    const hashedPassword =
      await bcrypt.hash(
        user.password,
        10,
      );

    const newUser = {
      username: user.username,
      password: hashedPassword,
    };

    this.users.push(newUser);

    return {
      message: 'User Registered',
      username: user.username,
    };
  }

  getUsers() {
    return this.users;
  }

  login(username: string) {
    return {
      access_token:
        this.jwtService.sign({
          username,
        }),
    };
  }
}