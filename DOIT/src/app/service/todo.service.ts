import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Http } from '@angular/http';

@Injectable()
export class TodoService {
  
  todoList: Todo[] = [];
  
  constructor(private http: Http) {

   }

   fetchTodoData(){
     return this.http.get('https://doit-32d5b.firebaseio.com/todo.json')
     .subscribe(data => {
       let response = data.json();
       let keys = Object.keys(response);
       for(let i=0; i<keys.length; i++){
          this.todoList.push(response[keys[i]]);
       }
     })
   }

   getProjectList(){
     return this.todoList.filter(todo => todo.category === 'project');
   }


   getPersonalList(){
     return this.todoList.filter(todo => todo.category === 'personal');
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
     this.http.post('https://doit-32d5b.firebaseio.com/todo.json',todo)
     .subscribe(data => {
       console.log(data.json());
       this.todoList.push(todo);    
     })
   }
}
