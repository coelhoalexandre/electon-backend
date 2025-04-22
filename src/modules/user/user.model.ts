import * as bcrypt from 'bcrypt';
import UserInterface from 'src/interfaces/user.interface';
import CreateUserDto from './dto/create-user.dto';
import { randomInt } from 'node:crypto';

export default class UserModel implements UserInterface {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt: string | Date;
  readonly updatedAt: string | Date | null;
  readonly deletedAt: string | Date | null;

  constructor(user: CreateUserDto) {
    this.username = user.username;
    this.email = user.email;
    this.password = this.getHashedPassword(user.password);
  }

  private getHashedPassword(password: string) {
    const saltRounds = randomInt(10, 16);
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  static async isValidPassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
