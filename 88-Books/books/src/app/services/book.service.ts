import { Injectable } from '@angular/core';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BOOKS } from '../data/book-data';

import { Observable } from 'rxjs/Observable';

import { Book } from '../book';

import { of } from 'rxjs/observable/of';
// import { tap, map } from 'rxjs/operators';

@Injectable()
export class BookService {
  // private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
  private base = 'http://5af7734bc222a90014dbda5e.mockapi.io/books';

  // difference$ = new BehaviorSubject(0);

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    // return of(BOOKS);
    return this.http.get<Book[]>(this.base);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${id}`);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }
}
