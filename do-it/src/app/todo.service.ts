import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from './models/todo';

@Injectable()
export class TodoService {

  todoList: Todo[] = [];
  baseURL: string = 'https://doit-5db57.firebaseio.com/todo.json';
  constructor(private http: Http) {
    this.fetchAllTodos();
   }

   fetchAllTodos() {
    this.todoList = [];
    return this.http.get(this.baseURL)
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
     this.postTask(new Todo(taskName, 'project'));
   }

   addTaskToPersonal(taskName: string) {
     this.postTask(new Todo(taskName, 'personal'));
   }

   postTask(todo: Todo) {
    this.http.post(this.baseURL, todo)
        .subscribe(data => {
          console.log(data);
          this.todoList.push(todo);
        }, err => {
          console.log(err);
        })
   }



}
