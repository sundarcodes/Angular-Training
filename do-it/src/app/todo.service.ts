import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

@Injectable()
export class TodoService {

  

  todoList: Todo[] = [];

  constructor() {

    let todo1 = new Todo('Fix bug 34341', 'project');
    this.todoList.push(todo1);
    let todo2 = new Todo('Analyze requirement XYZ', 'project');
    this.todoList.push(todo2);
    let todo3 = new Todo('Read daily', 'personal');
    this.todoList.push(todo3);
    let todo4 = new Todo('Drink water', 'personal');
    this.todoList.push(todo4);

    let todo5 = new Todo('Drink ', 'personal');
    this.todoList.push(todo5);
    // this.projectList = [
    //     'Fix bug 3434',
    //     'Analyze requirement XYZ'
    //   ];
    // this.personalList = [
    //     'Read daily',
    //     'Drink water'
    //   ]
   }

   getProjectList() {
     return this.todoList.filter(todo => todo.category === 'project');
   }

   getPersonalList() {
     return this.todoList.filter(todo => todo.category === 'personal');
   }

   addTaskToProjects(taskName: string) {
     console.log(taskName);
     //this.projectList.push(taskName);
     this.todoList.push(new Todo(taskName, 'project'));
     console.log(this.todoList);
   }

   addTaskToPersonal(taskName: string) {
     console.log(taskName);
     //this.personalList.push(taskName);
     this.todoList.push(new Todo(taskName, 'personal'));
   }


}
