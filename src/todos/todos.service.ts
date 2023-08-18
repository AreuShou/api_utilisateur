import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { User } from 'src/user.entities';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TodosService {
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    )  {}

    async create(dto:  {title: string}) {
       const todo = this.todoRepository.create(dto);
    
       return await this.todoRepository.save(todo);
    
    }


}
