import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Http } from '@angular/http';

@Injectable()
export class TodoService {
  
  todoList: Todo[] = [];
  baseUrl: string = 'https://doit-32d5b.firebaseio.com/todo';
  
  constructor(private http: Http) {
    this.fetchTodoData();
   }

   fetchTodoData(){
     return this.http.get(`${this.baseUrl}.json`)
     .subscribe(data => {
       let response = data.json();
       let keys = Object.keys(response);
       for(let i=0; i<keys.length; i++){
          let todoObj = response[keys[i]];
          todoObj.id = keys[i];
          let todoModel = new Todo(todoObj.title,todoObj.category,keys[i],todoObj.startDate,todoObj.isDone,todoObj.endDate);
          this.todoList.push(todoObj);
          console.log(this.todoList);
       }
     })
   }

   getProjectList(){
     return this.todoList
     .filter(todo => todo.category === 'project' && !todo.isDone);
   }


   getPersonalList(){
     return this.todoList
     .filter(todo => todo.category === 'personal' && !todo.isDone);
   }

   getArchiveList(){
     return this.todoList
     .filter(todo => todo.isDone);
   }

   updateProjectList(task){
     let todo = new Todo(task,'project');
     this.postTaskList(todo);
   }

   updatePersonalList(task){
     let todo = new Todo(task,'personal');
     this.postTaskList(todo);
   }

   postTaskList(todo : Todo){
     this.http.post(`${this.baseUrl}.json`,todo)
     .subscribe(data => {
       console.log(data.json());
       this.todoList.push(todo);    
     })
   }

   markToDoAsDone(todo: Todo){
     todo.isDone = true;
     todo.endDate = Date.now();
     this.http.put(`${this.baseUrl}/${todo.id}.json`,todo)
     .subscribe(data => {
       console.log(data);
     })
   }

   renew(todo: Todo){
     todo.isDone = false;
     todo.endDate = Date.now();
     this.http.put(`${this.baseUrl}/${todo.id}.json`,todo)
     .subscribe(data => {
       console.log(data);
     })
   }

   trash(todo: Todo){
    this.http.delete(`${this.baseUrl}/${todo.id}.json`,todo)
    .subscribe(data => {
    })
  }
}
