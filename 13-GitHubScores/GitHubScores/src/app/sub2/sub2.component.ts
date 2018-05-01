import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../data.service';
import { Calculation } from '../calculation';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {
  calculation: Array<Calculation> = [
    {
      scoreMsg: 'Needs work!',
      scoreMin: 0,
      scoreMax: 20,
      color: 'red'
    },
    {
      scoreMsg: 'A decent start!',
      scoreMin: 19,
      scoreMax: 50,
      color: 'orange'
    },
    {
      scoreMsg: ' Doing good! ',
      scoreMin: 49,
      scoreMax: 100,
      color: 'black'
    },
    {
      scoreMsg: ' Great job! ',
      scoreMin: 99,
      scoreMax: 200,
      color: 'green'
    },
    {
      scoreMsg: ' GitHub Elite!! ',
      scoreMin: 199,
      scoreMax: 99999,
      color: 'blue'
    }
  ];

  @Input() totalScore;

  constructor() {}

  ngOnInit() {}
}
