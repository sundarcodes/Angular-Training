import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { TodoService } from '../todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  projectList$: Observable<Todo[]>;
  personalList$: Observable<Todo[]>;

  projectList: Todo[];
  personalList: Todo[];
  constructor(private todoService: TodoService) {
   
   }

  ngOnInit() {
    // this.todoService.fetchAllTodos();
    this.todoService.todoList$
    .subscribe(list => {
      this.projectList = list.filter(todo => todo.category === 'project' && !todo.isDone);
      this.personalList = list.filter(todo => todo.category === 'personal' && !todo.isDone);
    });
  }

  onProjectTaskAdded(taskName: string) {
     this.todoService.addTaskToProjects(taskName);
  }

  onPersonalTaskAdded(taskName: string) {
    this.todoService.addTaskToPersonal(taskName);
  }

}
