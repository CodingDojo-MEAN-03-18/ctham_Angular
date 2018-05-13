import { Component, OnInit } from '@angular/core';

import { Book } from '../../book';
import { BOOKS } from '../../data/book-data';

import { TitleizePipe } from '../../titleize.pip';

import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['../../app.component.css', './book-list.component.css'],
  providers: [TitleizePipe]
})
export class BookListComponent implements OnInit {
  selectedBook: Book;

  books: Array<Book> = [];
  // books: Array<Book> = BOOKS;
  filter: Book = new Book(false);

  constructor(
    private titleize: TitleizePipe,
    private bookService: BookService
  ) {}

  ngOnInit() {
    // this.books = this.bookService.getBooks();
    this.bookService.getBooks().subscribe(books => {
      console.log(books);
      this.books = books;

      this.books.forEach(book => {
        book.title = this.titleize.transform(book.title);
        book.author = this.titleize.transform(book.author);
      });
    });

    // this.books.forEach(book => {
    //   book.title = this.titleize.transform(book.title);
    //   book.author = this.titleize.transform(book.author);
    // });

    // this.bookService.difference$.subscribe();
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

  onClick(event: Event) {
    event.stopPropagation();
  }

  onDelete(id: number) {
    console.log('onDelete', id);
    this.bookService.deleteBook(id).subscribe(returnBook => {
      console.log('returnBook', returnBook);

      this.books = this.books.filter(b => b.id !== returnBook.id);
    });
  }

  clearFilter(): void {
    // console.log('clearFilter');
    this.filter = new Book(false);
  }
}
