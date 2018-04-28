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
    console.log('***');
    console.log(addform.value);
    this.myQuotes.push(addform.value);
    console.log(this.myQuotes);
    addform.reset();
    this.myQuote = new Quote();
  }
}
