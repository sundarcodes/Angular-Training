import { Component } from '@angular/core';

import { TodoService } from '../service/todo.service';

@Component ({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class Nav {
    addTitle: boolean;
    constructor(private todoService: TodoService){
        this.addTitle = false;
    }

    addParentTask(parentTask: string){
       this.todoService.addParentTask(parentTask);
    }

    ngOnInit(){
    }
}