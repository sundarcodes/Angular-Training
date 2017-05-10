import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  taskRenew(todo: Todo){
    this.todoService.renew(todo);
  }

  trashTask(todo: Todo){
    this.todoService.trash(todo);
  }

}
