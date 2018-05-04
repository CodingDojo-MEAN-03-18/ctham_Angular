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

  ngOnInit() {
    console.log('***** ngOnInit');
  }

  onUp(subQuotes) {
    console.log('***** onUp');
    subQuotes.vote++;
  }

  onDown(subQuotes) {
    console.log('***** onDown');
    subQuotes.vote--;
  }

  onDelete(subQuotes) {
    console.log('***** onDelete');
    this.delSubQuote.emit(subQuotes);
  }
}
