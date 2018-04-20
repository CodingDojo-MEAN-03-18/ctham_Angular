import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';

  switch = {
    now: false,
    psd: false,
    mst: false,
    cst: false,
    est: false,
  };

  currentTime = new Date();
  offSet = new Date().getTimezoneOffset();
  utcTime = this.currentTime.toUTCString();
  timeZoneNum = 0;
  timeZone = '0';

  onButtonClick(data) {
    console.log('***************');
    console.log(data);
    console.log(this.currentTime);
    console.log(this.utcTime);
    console.log(this.offSet);

    if (this.offSet > 0) {
      this.timeZoneNum = -1 * (this.offSet / 60);
    } else {
      this.timeZoneNum = 1 * (this.offSet / 60);
    }

    if (data === 'now') {
      this.timeZone = this.timeZoneNum.toString();
    }
    if (data === 'psd') {
      this.timeZone = '-7';
    } else
    if (data === 'mst') {
      this.timeZone = '-6';
    }
    if (data === 'cst') {
      this.timeZone = '-5';
    }
    if (data === 'est') {
      this.timeZone = '-4';
    }
    console.log(this.timeZone);

    for (const idx in this.switch) {
      this.switch[idx] = idx === data ? true :  false;
      console.log(idx, this.switch[idx], data);
    }
  }
}



