import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';
 
@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {

  @Input() title: string;
  @Input() checkList: Todo[];

  @Output() taskAdded: EventEmitter<string> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  // console.log(this.checkList);
  }

  isOk(item) {
    let diffInTime = this.findTotalMsElapsed(item.startDate);
    let milliSecondsInADay = 24 * 60 * 60 * 1000;
    return diffInTime > milliSecondsInADay ? false: true;
  }

  isDueByOneDay(item) {
    let diffInTime = this.findTotalMsElapsed(item.startDate);
    let milliSecondsIn2Days = 2 * 24 * 60 * 60 * 1000;
    return diffInTime > milliSecondsIn2Days ? false: true;
  }

  isOverDue(item) {
    let diffInTime = this.findTotalMsElapsed(item.startDate);
    let milliSecondsIn3Days = 3 * 24 * 60 * 60 * 1000;
    return diffInTime > milliSecondsIn3Days ? false: true;
  }

  findTotalMsElapsed(startDate: number) {
    let currentDate = Date.now();
    let diffInTime = currentDate - startDate; 
    return diffInTime;
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
