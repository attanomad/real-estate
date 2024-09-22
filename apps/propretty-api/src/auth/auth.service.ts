import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from 'src/users/models/user.model';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    pass: string,
  ): Promise<Omit<User, 'hashedPassword'>> {
    const user = await this.usersService.findOneByUsername(username, true);

    if (!user)
      throw new HttpException(
        { code: 101, message: 'User not found' },
        HttpStatus.OK,
      );

    const match = await compare(pass, user.hashedPassword);

    if (match) {
      const { hashedPassword, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: Omit<User, 'hashedPassword'>) {
    const payload: JwtPayload = {
      userId: user.id,
      userRoles: user.roles.map((r) => r.name),
      username: user.username,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(username: string, pass: string) {
    return this.usersService.create(username, pass);
  }
}
