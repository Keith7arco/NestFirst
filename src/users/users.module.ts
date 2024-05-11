import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      // consumer.apply(LoggerMiddleware).forRoutes(
      //   //Especifica ruta:(Todas las rutas solo menciona la clase 'UsersController')
      //   {
      //     path: '/users',
      //     method:RequestMethod.GET
      //   }
      // ).apply(AuthMiddleware).forRoutes('users')
  }
}
