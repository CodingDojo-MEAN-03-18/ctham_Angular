import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-sub11',
  templateUrl: './sub11.component.html',
  styleUrls: ['./sub11.component.css']
})
export class Sub11Component implements OnInit {
  subMsg = '';

  @Input() sub1Building;
  @Output() sub11Earn = new EventEmitter();
  @Output() sub11Log = new EventEmitter();

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    console.log('***** sub11 OnInit');
  }

  onButton(x) {
    // console.log('****** button', x);
    const z: number = this.randEarn(
      this.sub1Building.levelMin,
      this.sub1Building.levelMax
    );

    this._dataService.totalGold += z;
    if (z >= 0) {
      this.subMsg = ' earned ' + z;
    } else {
      this.subMsg = ' lost ' + Math.abs(z);
    }
    const msg =
      'You have' +
      this.subMsg +
      ' gold at the ' +
      this.sub1Building.buildingName;
    this._dataService.totalLog.push(msg);

    // console.log(
    //   '*** sub11 onButton ',
    //   this._dataService.totalGold,
    //   this._dataService.totalLog
    // );

    this.sub11Earn.emit(this._dataService.totalGold);
    this.sub11Log.emit(this._dataService.totalLog);
  }

  randEarn(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
