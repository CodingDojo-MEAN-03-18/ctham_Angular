import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-sub11',
  templateUrl: './sub11.component.html',
  styleUrls: ['./sub11.component.css']
})
export class Sub11Component implements OnInit {
  // totalGold = 0;
  // totalLog = [];
  subMsg = '';

  @Input() subBuilding;
  @Output() subEarn = new EventEmitter();

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    console.log('***** sub11');
  }

  onButton(x) {
    // console.log('****** button', x);
    const z: number = this.randEarn(
      this.subBuilding.levelMin,
      this.subBuilding.levelMax
    );
    this._dataService.totalGold += z;
    console.log(
      '***** button=',
      x,
      ', gold=',
      z,
      ', total=',
      this._dataService.totalGold
    );

    if (z >= 0) {
      this.subMsg = ' earned ' + z;
    } else {
      this.subMsg = ' lost ' + Math.abs(z);
    }
    const msg =
      'You have' +
      this.subMsg +
      ' gold at the ' +
      this.subBuilding.buildingName;
    // console.log(msg);
    this._dataService.totalLog.push(msg);
    console.log(this._dataService.totalLog);
  }

  randEarn(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
