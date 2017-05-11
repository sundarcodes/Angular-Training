import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Todo } from '../models/todo';

declare var _: any;

@Injectable()
export class TodoService {
  
  baseUrl: string = 'https://doit-32d5b.firebaseio.com/todo';

  private todoSub: BehaviorSubject<Todo[]>;
  public todoObserver$: Observable<Todo[]>;
  
  constructor(private http: Http) {
    this.todoSub = new BehaviorSubject([]);
    this.todoObserver$ = this.todoSub.asObservable();
    this.fetchTodoData();
   }

   fetchTodoData(){
     let todoList = [];
     return this.http.get(`${this.baseUrl}.json`)
     .subscribe(data => {
       let response = data.json();
       let keys = Object.keys(response);
       for(let i=0; i<keys.length; i++){
          let todoObj = response[keys[i]];
          todoObj.id = keys[i];
          let todoModel = new Todo(todoObj.title,todoObj.category,keys[i],todoObj.startDate,todoObj.isDone,todoObj.endDate);
          todoList.push(todoObj);
       }
       this.todoSub.next(todoList);
     })
   }

   getArchiveList(){
     let todoList = [];
     return this.todoObserver$
     .subscribe(list => {
     return list.filter(todo => todo.isDone)
     })
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
       let todoList: Todo[] = this.todoSub.getValue();
       todo.id = data.json().name;
       todoList.push(todo);
       this.todoSub.next(todoList);
     })
   }

   markToDoAsDone(todo: Todo){
     let doneTodo: Todo = Object.assign({}, todo);
     doneTodo.isDone = true;
     doneTodo.endDate = Date.now();
     this.http.put(`${this.baseUrl}/${todo.id}.json`,doneTodo)
     .subscribe(data => {
       let todoList: Todo[] = this.todoSub.getValue();
       let response = data.json();
       _.mapValues(todoList, function(o) { 
         if(o.id == response.id) {
            o.isDone = response.isDone;
            o.endDate = response.endDate 
          }
        });
        this.todoSub.next(todoList);
     })
   }

   renew(todo: Todo){
     let renewTodo: Todo = Object.assign({}, todo);
     renewTodo.isDone = false;
     renewTodo.endDate = Date.now();
     this.http.put(`${this.baseUrl}/${todo.id}.json`,renewTodo)
     .subscribe(data => {
       let todoList: Todo[] = this.todoSub.getValue();
       let response = data.json();       
        _.mapValues(todoList, o => { 
         if(o.id == response.id) {
            o.isDone = response.isDone;
            o.endDate = response.endDate 
          }
        });
        this.todoSub.next(todoList);
     })
   }

   trash(todo: Todo){
    this.http.delete(`${this.baseUrl}/${todo.id}.json`)
    .subscribe(data => {
      let todoList: Todo[] = this.todoSub.getValue();
      _.remove(todoList, list => list.id == todo.id);
      this.todoSub.next(todoList);
    })
  }
}
