import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private todoService: TodoService) {
   
   }

  ngOnInit() {
    //this.projectList = this.todoService.getProjectList();
    //this.personalList = this.todoService.getPersonalList();
  }

  onProjectTaskAdded(taskName: string) {
    
     this.todoService.addTaskToProjects(taskName);
  }

  onPersonalTaskAdded(taskName: string) {
    
    this.todoService.addTaskToPersonal(taskName);
  }
  get projectList():Todo[]{
    return this.todoService.getProjectList();
  }
  get personalList():Todo[]{
    return this.todoService.getPersonalList();
  }

}
