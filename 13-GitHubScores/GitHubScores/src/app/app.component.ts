import { Component } from '@angular/core';

import { DataService } from './data.service';
// import { Calculation } from './calculation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Score';
  Sub1Score = 0;
  Sub2Score = 0;

  constructor(private dataService: DataService) {}

  onSub1Score(Sub1Score) {
    console.log('* main', Sub1Score);
    this.Sub2Score = Sub1Score;
  }
}
