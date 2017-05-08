import { Injectable } from '@angular/core';
import { Todo } from '../models/todo'

@Injectable()
export class TodoService {
  
  todoList: Todo[] = [];
  
  constructor() {
      let todo1 = new Todo('Qatar analysis','project');
      this.todoList.push(todo1);
      let todo2 = new Todo('Angular learning','project');
      this.todoList.push(todo2);
      let todo3 = new Todo('Start at 8:00 AM','personal');
      this.todoList.push(todo3);
      let todo4= new Todo('Leave by 6:00 PM','personal');
      this.todoList.push(todo4);
   }

   getProjectList(){
     return this.todoList.filter(todo => todo.category === 'project');
   }

   getPersonalList(){
     return this.todoList.filter(todo => todo.category === 'personal');
   }

   updateProjectList(task){
     let todo = new Todo(task,'project');
     this.todoList.push(todo);    
   }

   updatePersonalList(task){
     let todo = new Todo(task,'personal');
     this.todoList.push(todo);
   }

}
