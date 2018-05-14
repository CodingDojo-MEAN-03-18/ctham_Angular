import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Book } from '../../book';

import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['../../app.component.css', './book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book: Book = new Book();

  @Output() createBook = new EventEmitter<Book>();

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    const { value, valid } = form;
    console.log('submitting', NgForm);

    this.bookService.createBook(this.book).subscribe(book => {
      // this.createBook.emit(book);

      this.router.navigateByUrl('/');
      this.book = new Book();

      form.reset();
    });

    // console.log('onSubmit', event);
    // console.log('onSubmit', this.book);
    console.log('onSubmit', form.value);

    // this.books.push(this.book);
    // this.createBook.emit(this.book);

    // this.book = new Book();
    // form.reset();
    // console.log('books', this.books);
  }
}
