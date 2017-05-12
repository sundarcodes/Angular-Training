import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input() todo: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  delete(id) {
    this.todoService.deleteTodo(id);
  }

  revert(todo: Todo) {
    this.todoService.revertTodo(todo);
  }

}
