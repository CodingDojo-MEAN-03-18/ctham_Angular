import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromBooks from './books';
import { BookListComponent } from './books/book-list/book-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookResolve } from './resolvers';
const routes: Routes = [
  {
    // path: '',
    // component: fromBooks.BookListComponent
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    // /books
    path: 'books',
    // component: fromBooks.BookListComponent,
    children: [
      {
        path: '',
        component: fromBooks.BookListComponent
      },
      {
        path: 'new',
        component: fromBooks.BookNewComponent
      },
      {
        path: ':bookID',
        component: fromBooks.BookDetailComponent,
        resolve: {
          book: BookResolve
        }
      }
    ]
  },
  // {
  //   path: 'books/new',
  //   component: fromBooks.BookNewComponent
  // },
  // {
  //   path: 'books/:bookID',
  //   component: fromBooks.BookDetailComponent
  // }
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
