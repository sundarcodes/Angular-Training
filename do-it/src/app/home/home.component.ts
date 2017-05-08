import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projectList: string[];
  personalList: string[];

  constructor() {
    this.projectList = [
      'Fix bug 3434',
      'Analyze requirement XYZ'
    ];
    this.personalList = [
      'Read daily',
      'Drink water'
    ]
   }

  ngOnInit() {
  }

  onProjectTaskAdded(taskName: string) {
    console.log(taskName);
    this.projectList.push(taskName);
  }

  onPersonalTaskAdded(taskName: string) {
    console.log(taskName);
    this.personalList.push(taskName);
  }

}
