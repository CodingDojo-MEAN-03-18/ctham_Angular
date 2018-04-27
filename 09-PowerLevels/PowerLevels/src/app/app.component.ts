import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PowerLevel } from './powerlevel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Power Levels';

  mypowerlevel = new PowerLevel();

  mypowerlevels: Array<PowerLevel> = [
    { title: 'HumanComponent', level: 1 },
    { title: 'SaiyanComponent', level: 10 },
    { title: 'SuperSaiyanComponent', level: 90 },
    { title: 'SuperSaiyanTwoComponent', level: 150 },
    { title: 'SuperSaiyanThreeComponent', level: 250 },
    { title: 'SuperSaiyanFourComponent', level: 500 }
  ];

  onSubmit(event: Event, powerform: NgForm) {
    console.log('***');
    console.log(powerform.value);
    console.log(this.mypowerlevels);
    // this.powerlevel = new PowerLevel();
  }
}
