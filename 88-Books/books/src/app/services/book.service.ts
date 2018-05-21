import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BOOKS } from '../data/book-data';

import { Observable } from 'rxjs/Observable';

import { Book } from '../book';

import { of } from 'rxjs/observable/of';
// import { tap, map } from 'rxjs/operators';

@Injectable()
export class BookService {
  // private base = 'http://5af7734bc222a90014dbda5e.mockapi.io/books';
  private base = '/api/books';

  // constructor() {}
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
    // return of(BOOKS);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }

  // deleteBook(book: Book): Observable<Book> {
  deleteBook(id: number): Observable<Book> {
    // return this.http.delete<Book>(`${this.base}/${book.id}`);
    return this.http.delete<Book>(`${this.base}/${id}`);
  }

  getABook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }
}
