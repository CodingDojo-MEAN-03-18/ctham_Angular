import { Component, OnInit } from '@angular/core';

import { Book } from '../../book';
// import { BOOKS } from '../../data/book-data';

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

  // books: Array<Book> = BOOKS;
  books: Array<Book> = [];
  filter: Book = new Book(false);

  constructor(
    private titleize: TitleizePipe,
    private bookService: BookService
  ) {}

  ngOnInit() {
    // this.books = this.bookService.getBooks();
    this.bookService.getBooks().subscribe(books => {
      console.log('getBooks', books);
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
    // console.log('onClick', event);
    event.stopPropagation();
  }

  // onDelete(event: Book) {
  onDelete(id: number) {
    // console.log('onDelete', event);
    console.log('onDelete', id);
    // this.bookService.deleteBook(event).subscribe(returnedBook => {
    this.bookService.deleteBook(id).subscribe(returnedBook => {
      console.log('returnedBook', returnedBook);
      // this.books = this.books.filter(b => b.id === returnedBook.id);
      this.books = this.books.filter(b => b.id !== returnedBook.id);
    });
  }

  clearFilter(): void {
    // console.log('clearFilter');
    this.filter = new Book(false);
  }
}
