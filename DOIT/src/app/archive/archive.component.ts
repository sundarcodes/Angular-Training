import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { TodoService } from '../service/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  archiveList$: Observable<Todo[]>;
  searchSub: BehaviorSubject<string>;

  constructor(private todoService: TodoService) {
    this.searchSub = new BehaviorSubject('');
   }

  ngOnInit() {
    this.archiveList$ = this.todoService.todoObserver$
    .combineLatest(this.searchSub, (list,search) => {
      return list.filter(todo => todo.isDone && todo.title.includes(search))
    });
    console.log(this.archiveList$);
  }

  taskRenew(todo: Todo){
    this.todoService.renew(todo);
  }

  trashTask(todo: Todo){
    this.todoService.trash(todo);
  }

  searchKeyword(search: string){
   this.searchSub.next(search);
  }

}
