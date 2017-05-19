import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Todo } from '../models/todo';
import { TodoParent } from '../models/todoParent';

declare var _: any;

@Injectable()
export class TodoService {
  
  todoBaseUrl: string = 'https://doit-32d5b.firebaseio.com/todo';
  todoParentUrl: string = 'https://doit-32d5b.firebaseio.com/todoParent';

  private todoSub: BehaviorSubject<Todo[]>;
  public todoObserver$: Observable<Todo[]>;
  private todoParentSub: BehaviorSubject<TodoParent[]>;
  public todoParentObserver$ : Observable<TodoParent[]>;
  
  constructor(private http: Http) {
    this.todoSub = new BehaviorSubject([]);
    this.todoObserver$ = this.todoSub.asObservable();
    this.todoParentSub = new BehaviorSubject([]);
    this.todoParentObserver$ = this.todoParentSub.asObservable();
    this.fetchTodoData();
    this.fetchParentData();
   }

   fetchTodoData(){
     let todoList = [];
     return this.http.get(`${this.todoBaseUrl}.json`)
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

   updateParentList(task,parent){
     let todo = new Todo(task,parent);
     this.postTaskList(todo);
   }

   postTaskList(todo : Todo){
     this.http.post(`${this.todoBaseUrl}.json`,todo)
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
     this.http.put(`${this.todoBaseUrl}/${todo.id}.json`,doneTodo)
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

   renew(todo: Todo){
     let renewTodo: Todo = Object.assign({}, todo);
     renewTodo.isDone = false;
     renewTodo.endDate = Date.now();
     this.http.put(`${this.todoBaseUrl}/${todo.id}.json`,renewTodo)
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
    this.http.delete(`${this.todoBaseUrl}/${todo.id}.json`)
    .subscribe(data => {
      let todoList: Todo[] = this.todoSub.getValue();
      _.remove(todoList, list => list.id == todo.id);
      this.todoSub.next(todoList);
    })
  }

  addParentTask(parentTask: string){
    let todoParent = new TodoParent(parentTask);
    this.http.post(`${this.todoParentUrl}.json`,todoParent)
     .subscribe(data => {
       console.log(data.json());
       let todoParentList: TodoParent[] = this.todoParentSub.getValue();
       todoParent.id = data.json().name;
       todoParentList.push(todoParent);
       this.todoParentSub.next(todoParentList);
     })
  }

  fetchParentData(){
    let parentList = [];
    this.http.get(`${this.todoParentUrl}.json`)
    .subscribe(data => {
      let response = data.json();
      let keys = Object.keys(response);
       for(let i=0; i<keys.length; i++){
          let todoParentObj = response[keys[i]];
          todoParentObj.id = keys[i];
          let todoParentModel = new Todo(todoParentObj.name,todoParentObj.created_at,keys[i]);
          parentList.push(todoParentObj);
       }
       this.todoParentSub.next(parentList);
    })
  }
}
