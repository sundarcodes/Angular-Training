import { Component, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

import { TodoService } from '../service/todo.service';

@Component ({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})


export class Nav {

    addTitle: boolean;
    modalActions = new EventEmitter<string|MaterializeAction>();

    constructor(private todoService: TodoService){
        this.addTitle = false;
    }

  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

    addParentTask(parentTask: string){
       this.todoService.addParentTask(parentTask);
    }

    ngOnInit(){
    }
}