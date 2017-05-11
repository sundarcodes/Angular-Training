import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

import {Todo } from '../models/todo';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  archiveList: Todo[];
  ngOnInit() {
    this.todoService.todoList$
    .subscribe(list => {
      this.archiveList = list.filter(todo => todo.isDone);
    })
  }

}
