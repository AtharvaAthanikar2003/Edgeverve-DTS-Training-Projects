import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  name: string = '';
  email: string = '';

  constructor(private userService: UserService) {}

  createUser() {
    if (this.name && this.email) {
      this.userService.createUser({ id: 0, name: this.name, email: this.email });
      this.name = '';
      this.email = '';
      alert('User created successfully!');
    } else {
      alert('Please fill all fields!');
    }
  }
}
