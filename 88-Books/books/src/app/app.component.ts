import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Book } from './book';
import { BOOKS } from './data/book-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book: Book = new Book();
  selectedBook: Book;

  // books: Array<Book> = [];
  books: Array<Book> = BOOKS;

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    const { value, valid } = form;

    // console.log('onSubmit', event);
    // console.log('onSubmit', this.book);
    console.log('onSubmit', form.value);

    this.books.push(this.book);
    this.book = new Book();

    form.reset();
    console.log('books', this.books);
  }

  selectBook(book: Book): void {
    console.log('selectBook', book);
    // this.selectedBook = book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }

    this.selectedBook = this.selectedBook === book ? null : book;
  }
}
