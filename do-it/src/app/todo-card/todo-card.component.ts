import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }

}
