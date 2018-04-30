import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DataService } from '../data.service';

import { Building } from '../building';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {
  @Output() sub1Earn = new EventEmitter();
  @Output() sub1Log = new EventEmitter();

  building: Array<Building> = [
    { no: 1, buildingName: 'Farm', levelMin: 2, levelMax: 5 },
    { no: 2, buildingName: 'Cave', levelMin: 5, levelMax: 10 },
    { no: 3, buildingName: 'Casino', levelMin: -100, levelMax: 100 },
    { no: 4, buildingName: 'House', levelMin: 7, levelMax: 15 }
  ];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    console.log('*** sub1 OnInit');
    // console.log(this.building);
  }

  onSub1Earn(sub1Earn) {
    // console.log('*** sub1 Sub1Earn', sub1Earn);
    this.sub1Earn.emit(sub1Earn);
  }
  onSub1Log(sub1Log) {
    // console.log('*** sub1 Sub1Log', sub1Log);
    this.sub1Log.emit(sub1Log);
  }
}
