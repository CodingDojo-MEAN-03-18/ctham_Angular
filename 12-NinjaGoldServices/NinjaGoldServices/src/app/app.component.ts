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

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    console.log('*** main OnInit');
  }
  onSubEarn(subEarn) {
    // console.log('*** main', subEarn);
    this.totalGold = subEarn;
  }
  onSubLog(subLog) {
    // console.log('*** main', subLog);
    this.totalLog = subLog;
  }
}
