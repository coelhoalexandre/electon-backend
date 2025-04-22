import { PrismaService } from '../database/prisma/prisma.service';
import PrismaModelNames from '../enum/PrismaModelNames';
import { Provider } from '@nestjs/common';

const repositoryFactoryProvider = (modelName: PrismaModelNames): Provider => ({
  provide: 'REPOSITORY',
  useFactory: () => {
    const prismaService = new PrismaService();
    const model = prismaService[modelName];
    return model;
  },
});
export default repositoryFactoryProvider;
