import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../models/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  @Input() title: string;
  @Input() checkList: string[];

  @Output() updateTask: EventEmitter<string> = new EventEmitter;

  updateList (list: string){
    this.updateTask.emit(list);
  }

  onCheck(todo: Todo){
    this.todoService.markToDoAsDone(todo);
  }

  ngOnInit() {
  }

}
