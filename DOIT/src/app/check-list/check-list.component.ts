import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  constructor() { }

   @Input()
    title: string;

  ngOnInit() {
  }

}
