import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  @Input() subQuotes;
  @Output() delSubQuote = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onUp(subQuotes) {
    console.log('***** onUp');
    subQuotes.qVote++;
  }

  onDown(subQuotes) {
    console.log('***** onDown');
    subQuotes.qVote--;
  }

  onDelete(subQuotes) {
    console.log('***** onDelete');
    this.delSubQuote.emit(subQuotes);
  }
}
