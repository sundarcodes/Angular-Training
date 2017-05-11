import { Component, OnInit } from '@angular/core';

import { TodoService } from '../service/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projectList: Todo[];
  personalList: Todo[];

  constructor(private todoService: TodoService) {
        
   }

  ngOnInit() {
     this.todoService.todoObserver$
     .subscribe(list => {
      this.projectList = list.filter(todo => todo.category === 'project' && !todo.isDone)
     });
    this.todoService.todoObserver$
    .subscribe(list => {
      this.personalList = list.filter(todo => todo.category === 'personal' && !todo.isDone)
    })
  }

  projectUpdate(task: string){
    this.todoService.updateProjectList(task);
  }

  personalUpdate(task: string){
    this.todoService.updatePersonalList(task);
  }

}
