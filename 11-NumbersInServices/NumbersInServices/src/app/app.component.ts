import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Numbers In Service';

  numbers1: number[] = [];
  numbers2: number[] = [];
  numbers3: number[] = [];

  constructor(private _dataService: DataService) {}

  pushClear() {
    this._dataService.clearNumber();
  }
}
