import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// import { BookListComponent } from './books/book-list/book-list.component';
// import { BookNewComponent } from './books/book-new/book-new.component';
// import { BookDetailComponent } from './books/book-detail/book-detail.component';
import * as fromBooks from './books';

import { TitleizePipe } from './titleize.pip';
import { SearchPipe } from './search.pipe';

TitleizePipe.skipWords = ['of'];

import { BookService } from './services/book.service';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // BookListComponent,
    // BookNewComponent,
    // BookDetailComponent,
    ...fromBooks.components,
    TitleizePipe,
    SearchPipe,
    NavComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
