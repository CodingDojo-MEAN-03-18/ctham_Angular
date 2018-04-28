import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers2: number[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.numbers2 = this._dataService.retrieveNumber(2);
  }

  pushTwo() {
    this._dataService.addNumber(2, Math.floor(Math.random() * 10));
  }
}
