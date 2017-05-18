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
    let diffInTime = this.findTotalMsElapsed(item.createdDate);
    let milliSecondsInADay = 24 * 60 * 60 * 1000;
    // console.log(diffInTime, milliSecondsInADay);
    return (diffInTime < milliSecondsInADay) ? true: false;
  }

  isDueByOneDay(item) {
    let diffInTime = this.findTotalMsElapsed(item.createdDate);
    let milliSecondsInADay = 24 * 60 * 60 * 1000;
    let milliSecondsIn2Days = 2 * 24 * 60 * 60 * 1000;
    return (diffInTime > milliSecondsInADay && diffInTime < milliSecondsIn2Days  ) ? true: false;
  }

  isOverDue(item) {
    let diffInTime = this.findTotalMsElapsed(item.createdDate);
    let milliSecondsIn3Days = 3 * 24 * 60 * 60 * 1000;
    return diffInTime > milliSecondsIn3Days ? true: false;
  }

  findTotalMsElapsed(createdDate: number) {
    let currentDate = Date.now();
    // console.log(createdDate, Date.now());
    let diffInTime = currentDate - createdDate; 
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
