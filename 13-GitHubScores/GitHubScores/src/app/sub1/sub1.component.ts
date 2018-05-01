import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {
  errorMsg: string;
  currScore: number;

  @Output() sub1Score = new EventEmitter();

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  onClick(username: string): void {
    console.log('*** sub1', username);
    this.dataService.getData(username).subscribe(
      data => {
        console.log('*** sub1 getData', data);
        if (data) {
          this.currScore = data.public_repos + data.followers;
          console.log('*** sub1 currScore', this.currScore);
          this.errorMsg = '';
          this.sub1Score.emit(this.currScore);
        }
      },
      error => {
        this.currScore = 0;
        this.errorMsg =
          'User does not exist! Pick a different GitHub username!';
        console.log('*** sub1 error', error);
        this.sub1Score.emit(this.currScore);
      }
    );
  }
}
