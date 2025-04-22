import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import PrismaModelNames from '../../enum/PrismaModelNames';
import repositoryFactoryProvider from '../../factories/repositoryFactory';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, repositoryFactoryProvider(PrismaModelNames.USER)],
  exports: [UserService],
})
export class UserModule {}
