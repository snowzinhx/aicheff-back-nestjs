import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/database/db.sqlite',
      entities: [User],
      migrations: ['./database/migrations/*.migration.ts'],
      synchronize: true,
      autoLoadEntities: true,
    })],
  controllers: [],
  providers: [],
})
export class AppModule { }
