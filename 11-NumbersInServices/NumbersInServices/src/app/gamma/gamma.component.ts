import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  numbers3: number[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.numbers3 = this._dataService.retrieveNumber(3);
  }

  pushDiff() {
    this._dataService.differentNumber();
  }
}
