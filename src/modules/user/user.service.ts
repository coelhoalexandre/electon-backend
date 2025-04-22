import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import UserInterface from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('REPOSITORY')
    private userRepository: Prisma.UserDelegate
  ) {}

  async create(user: UserInterface): Promise<Omit<UserInterface, 'password'>> {
    return await this.userRepository.create({
      data: user,
      omit: { password: true },
    });
  }

  async findMany() {
    return await this.userRepository.findMany({
      omit: { password: true },
      include: { cartItems: { include: { product: true } } },
    });
  }

  async findOne(email: string): Promise<UserInterface | null> {
    return await this.userRepository.findUnique({ where: { email } });
  }

  async getCartItems(id: string) {
    return await this.userRepository.findUnique({
      where: { id },
      select: { cartItems: true },
    });
  }

  async updateCartItems(
    { cartItemIds }: { cartItemIds: string[] },
    id: string
  ) {
    return await this.userRepository.update({
      where: { id },
      data: {
        cartItems: {
          connect: cartItemIds.map((id) => ({ id })) || [],
        },
      },
    });
  }
}
