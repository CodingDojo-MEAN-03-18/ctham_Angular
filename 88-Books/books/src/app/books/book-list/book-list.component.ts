import { Component, OnInit } from '@angular/core';

import { Book } from '../../book';
import { BOOKS } from '../../data/book-data';

import { TitleizePipe } from '../../titleize.pip';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['../../app.component.css', './book-list.component.css'],
  providers: [TitleizePipe]
})
export class BookListComponent implements OnInit {
  selectedBook: Book;

  // books: Array<Book> = [];
  books: Array<Book> = BOOKS;
  filter: Book = new Book(false);

  constructor(private titleize: TitleizePipe) {}

  ngOnInit() {
    this.books.forEach(book => {
      book.title = this.titleize.transform(book.title);
      book.author = this.titleize.transform(book.author);
    });
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

  onCreate(event: Book) {
    console.log('onCreate', event);
    this.books.push(event);
  }

  clearFilter(): void {
    // console.log('clearFilter');
    this.filter = new Book(false);
  }
}
