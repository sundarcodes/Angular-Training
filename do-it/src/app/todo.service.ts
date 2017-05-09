import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from './models/todo';

@Injectable()
export class TodoService {

  todoList: Todo[] = [];

  constructor(private http: Http) {

   }

   fetchAllTodos(){
    return this.http.get('https://doit-5db57.firebaseio.com/todo.json')
    .subscribe(data => {
      let resp = data.json();
      let keysArr = Object.keys(resp);
      for(let i = 0;i < keysArr.length; i++) {
        let key = keysArr[i];
        let todoRspObj = resp[key];
        let todoModel = new Todo(todoRspObj.title, todoRspObj.category);
        this.todoList.push(todoModel);
      }
    });
   }

   getProjectList() {
     return this.todoList.filter(todo => todo.category === 'project');
   }

   getPersonalList() {
     return this.todoList.filter(todo => todo.category === 'personal');
   }

   addTaskToProjects(taskName: string) {
     let newTodo = new Todo(taskName, 'project');
     this.todoList.push(newTodo);
   }

   addTaskToPersonal(taskName: string) {
     let newTodo = new Todo(taskName, 'personal');
     this.todoList.push(newTodo);
   }


}
