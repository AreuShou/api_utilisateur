import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { User } from 'src/user.entities';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';


@Injectable()
export class TodosService {
   // delete(arg0: number) {
      //throw new Error('Method not implemented.');
    //}
    //update(arg0: number, dto: UpdateTodoDto) {
     // throw new Error('Method not implemented.');
    //}
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    )  {}

    async create(dto:  CreateTodoDto) {
       const todo = this.todoRepository.create(dto);
    
       return await this.todoRepository.save(todo);
    }

    findMany() {
        return this.todoRepository.find();
    }

    async update(id: number, dto: CreateTodoDto) {
      const todo = await this.todoRepository.findOne({ where: { id }});
       
      //Vérifier que l'enrégistrement existe
      Object.assign(todo, dto);

      return await this.todoRepository.save(todo);
   
    }


    async delete(id: number) {
      const todo = await this.todoRepository.findOne({ where: { id }});
       
      //Vérifier que l'enrégistrement existe
      

      return await this.todoRepository.remove(todo);
   
    }



}
