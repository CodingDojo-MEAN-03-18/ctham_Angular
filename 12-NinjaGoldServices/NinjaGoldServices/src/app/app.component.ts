import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja Gold Services';

  totalGold = this._dataService.totalGold;
  totalLog = this._dataService.totalLog;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    console.log('*** main=', this.totalGold, this.totalLog);

  }
}
