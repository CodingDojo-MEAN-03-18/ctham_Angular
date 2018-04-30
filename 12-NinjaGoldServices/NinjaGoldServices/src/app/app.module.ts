import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub11Component } from './sub1/sub11/sub11.component';
import { Sub2Component } from './sub2/sub2.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent, Sub1Component, Sub2Component, Sub11Component],
  imports: [BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
