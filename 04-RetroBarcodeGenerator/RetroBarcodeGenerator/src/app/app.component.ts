import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';

  arrayColor: string[] = arrayColor();
}

function randColor() {

  const colour = 'rgb(' +
    (Math.floor(Math.random() * 255)) + ',' +
    (Math.floor(Math.random() * 255)) + ',' +
    (Math.floor(Math.random() * 255)) + ')';

  console.log(colour);
  return colour;
}

function arrayColor(): string[] {

  const tempColor: string[] = [];

  for (let x = 0; x < 20; x++) {
    tempColor.push(randColor());
  }

  return tempColor;
}
