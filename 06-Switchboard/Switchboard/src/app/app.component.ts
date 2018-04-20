import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Switchboard';
  switchArray = initBox();

  onButtonClick(data) {
    console.log(data, this.switchArray[data]);

    if (this.switchArray[data] === true) {
      this.switchArray[data] = false;
    } else {
      this.switchArray[data] = true;
    }
  }
}

function initBox(): boolean[] {
  const temp: boolean[] = [];

  for (let x = 0; x < 10; x++) {
    temp.push(false);
  }
  return temp;
}
