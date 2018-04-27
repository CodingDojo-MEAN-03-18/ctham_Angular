import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange
} from '@angular/core';
import { PowerLevel } from '../powerlevel';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  @Input() submypower;
  @Input() subuser;

  constructor() {}

  ngOnInit() {
    this.subuser = 0;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChange) {
    // console.log('*** sub', this.subuser);
    this.subuser = this.subuser > 100 ? 100 : this.subuser;
  }
}
