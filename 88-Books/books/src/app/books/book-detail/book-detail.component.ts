import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

import { Book } from '../../book';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['../../app.component.css', './book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;
  errorMessage: string;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.paramMap
    //   .switchMap(params => this.bookService.getABook(params.get('bookID')))
    //   .subscribe(
    //     book => {
    //       console.log('getABook', book);
    //       this.book = book;
    //     },
    //     error => {
    //       console.log('error', error);
    //       this.errorMessage = error.statusText;
    //       setTimeout(() => {
    //         this.errorMessage = null;
    //       }, 3000);
    //     }
    //   );

    this.book = this.route.snapshot.data.book as Book;
  }
}
