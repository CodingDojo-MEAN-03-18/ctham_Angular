import { Component, OnInit, OnChanges } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {
  // totalGold = 0;
  // totalLog = [];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    console.log(
      '*** sub2 OnInit = ',
      this._dataService.totalLog,
      this._dataService.totalGold
    );
  }
  ngOnChange() {
    console.log(
      '*** sub2 OnChange = ',
      this._dataService.totalLog,
      this._dataService.totalGold
    );
  }
}
