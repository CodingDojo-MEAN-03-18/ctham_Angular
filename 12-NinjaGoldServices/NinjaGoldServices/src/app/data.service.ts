import { Injectable } from '@angular/core';

import { Building } from './building';

@Injectable()
export class DataService {
  totalGold = 0;
  totalLog = [];

  // building: Array<Building> = [];
  // building: Array<Building> = [
  //   { no: 1, buildingName: 'Farm', levelMin: 2, levelMax: 5 },
  //   { no: 2, buildingName: 'Cave', levelMin: 5, levelMax: 10 },
  //   { no: 3, buildingName: 'Casino', levelMin: -100, levelMax: 100 },
  //   { no: 4, buildingName: 'House', levelMin: 7, levelMax: 15 }
  // ];

  constructor() {}
}
