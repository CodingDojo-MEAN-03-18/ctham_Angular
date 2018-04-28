import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Ranks';

  myQuote = new Quote();
  myQuotes: Array<Quote> = [];

  onSubmit(event: Event, addform: NgForm) {
    console.log('*** onSubmit');
    console.log(addform.value);

    this.myQuotes.push(addform.value);
    console.log(this.myQuotes);

    this.myQuote = new Quote();
    addform.reset();
  }

  onDelete(event: Event, quote) {
    console.log('*** onDelete');
    const index = this.myQuotes.indexOf(quote);
    this.myQuotes.splice(index, 1);
  }
}