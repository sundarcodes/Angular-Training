import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-archive-card',
  templateUrl: './archive-card.component.html',
  styleUrls: ['./archive-card.component.css']
})
export class ArchiveCardComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
