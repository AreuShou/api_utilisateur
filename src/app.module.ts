import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodosModule } from './todos/todos.module';
import { Todo } from './todos/entities/todo.entity';
import path, { join } from 'path';

@Module({
  imports: [
    
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'arlette',
      database: 'FORTUNE',
      autoLoadEntities: true,
      synchronize: true,
    }),
      
    
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// @Module({
  //imports: [TypeOrmModule.forRoot(), UsersModule],
//}) --
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
