import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  @Input() title: string;
  @Input() checkList: Todo[];

  @Output() taskAdded: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  // console.log(this.checkList);
  }
  
  addTask(taskName: string) {
    // console.log(taskName);
    this.taskAdded.emit(taskName);
  }

}
