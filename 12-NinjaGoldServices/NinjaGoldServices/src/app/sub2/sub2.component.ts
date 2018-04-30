import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {
  @Input() sub2Log;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    console.log('*** sub2 OnInit');
  }

  // triggerEvent() {
  //   console.log('*** sub2 triggerEvent');
  // }
}
