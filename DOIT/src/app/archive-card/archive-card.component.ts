import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-archive-card',
  templateUrl: './archive-card.component.html',
  styleUrls: ['./archive-card.component.css']
})
export class ArchiveCardComponent implements OnInit {

  @Input() todo: Todo;

  @Output() renewTask: EventEmitter<Todo> = new EventEmitter;
  @Output() trashTask: EventEmitter<Todo> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  renew(todo: Todo){
    this.renewTask.emit(todo);
  }

  trash(todo: Todo){
    this.trashTask.emit(todo);
  }

}
