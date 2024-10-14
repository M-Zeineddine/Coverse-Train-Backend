// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { UserService } from './users.service';
import { PrismaModule } from 'prisma/prisma.module';
import { UsersController } from './users.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule { }
