import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    contact: '+1-234-567-8901',
    age: 35,
    gender: 'Male',
    address: '5th Avenue, New York, United States'
  };
}
