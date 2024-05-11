import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { HelloModule } from './hello/hello.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, ProjectsModule, UsersModule, AuthModule, HelloModule, PaymentsModule],
  controllers: [ AuthController],
  providers: [],
})
export class AppModule {}
