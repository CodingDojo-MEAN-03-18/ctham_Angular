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
    this.myQuote.vote = 0;

    this.myQuotes.push(this.myQuote);
    console.log(this.myQuotes);

    this.myQuotes.sort((q1, q2) => q2.vote - q1.vote);
    console.log('after sorted', this.myQuotes);

    this.myQuote = new Quote();
    addform.reset();
  }

  onSubDelete(event: Event, quote) {
    console.log('*** onDelete');
    const index = this.myQuotes.indexOf(quote);
    this.myQuotes.splice(index, 1);
  }
}
