import { Component, OnInit } from '@angular/core';

import { TodoService } from '../service/todo.service';
import { Todo } from '../models/todo';
import { TodoParent } from '../models/todoParent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projectList: Todo[];
  parentList: Todo[];
  todoParent: TodoParent[];

  constructor(private todoService: TodoService) {
        
   }

  ngOnInit() {

    this.todoService.todoParentObserver$
    .subscribe(parentList => {
      this.todoParent = parentList;
    });
    console.log(this.todoParent);
  }

  getParentList(id: string){
     this.todoService.todoObserver$
     .subscribe(list => {
      this.parentList = list.filter(todo => todo.category === id && !todo.isDone)
     });
     return this.parentList;
  }

  parentUpdate(task: string,parent){
    this.todoService.updateParentList(task,parent);
  }
}
