import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { Building } from '../building';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {
  // totalGold = 0;
  // totalLog = [];

  building: Array<Building> = [
    { no: 1, buildingName: 'Farm', levelMin: 2, levelMax: 5 },
    { no: 2, buildingName: 'Cave', levelMin: 5, levelMax: 10 },
    { no: 3, buildingName: 'Casino', levelMin: -100, levelMax: 100 },
    { no: 4, buildingName: 'House', levelMin: 7, levelMax: 15 }
  ];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    console.log('*** sub1');
    // console.log(this.building);
  }
}
