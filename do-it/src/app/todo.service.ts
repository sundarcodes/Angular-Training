import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

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

   getProjectList() {
     return this.projectList;
   }

   getPersonalList() {
     return this.personalList;
   }

   addTaskToProjects(taskName: string) {
     this.projectList.push(taskName);
   }

   addTaskToPersonal(taskName: string) {
     this.personalList.push(taskName);
   }


}
