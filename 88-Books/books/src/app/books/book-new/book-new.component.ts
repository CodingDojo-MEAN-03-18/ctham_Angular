import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from '../../book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['../../app.component.css', './book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book: Book = new Book();

  @Output() createBook = new EventEmitter<Book>();

  constructor() {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    const { value, valid } = form;

    // console.log('onSubmit', event);
    // console.log('onSubmit', this.book);
    console.log('onSubmit', form.value);

    // this.books.push(this.book);
    this.createBook.emit(this.book);

    this.book = new Book();

    form.reset();
    // console.log('books', this.books);
  }
}
