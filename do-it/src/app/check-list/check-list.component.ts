import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';
 
@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  @Input() title: string;
  @Input() checkList: Todo[];

  @Output() taskAdded: EventEmitter<string> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  // console.log(this.checkList);
  }
  
  addTask(taskName: string) {
    // console.log(taskName);
    this.taskAdded.emit(taskName);
  }

  onCheckboxChange(todo: Todo, e: any) {
    console.log(e.target.checked);
    console.log(todo);
    this.todoService.markTodoAsDone(todo);
  }

}
