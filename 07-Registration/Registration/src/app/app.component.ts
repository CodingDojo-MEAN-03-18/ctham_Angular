import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';

  user: User = new User();
  users: Array<User> = [];

  onSubmit(event: Event, userForm: NgForm) {
    console.log('****', userForm.value);
    event.preventDefault();
    const { value, valid } = userForm;
    console.log(this.user);

    this.users.push(this.user);
    this.user = new User();
    userForm.reset();
  }
}
