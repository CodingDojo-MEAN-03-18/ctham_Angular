import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Registration';
  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
    address: '',
    unit: '',
    city: '',
    state: '',
    lucky: ''
  };
}
