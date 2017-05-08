import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projectList: string[];
  personalList: string[];

  constructor(private todoService: TodoService) {
   
   }

  ngOnInit() {
    this.projectList = this.todoService.getProjectList();
    this.personalList = this.todoService.getPersonalList();
  }

  onProjectTaskAdded(taskName: string) {
    console.log(taskName);
     this.todoService.addTaskToProjects(taskName);
  }

  onPersonalTaskAdded(taskName: string) {
    console.log(taskName);
    this.todoService.addTaskToPersonal(taskName);
  }

}
