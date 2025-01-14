import { Component } from '@angular/core';
@Component({
  selector: 'app-age-message',
  templateUrl: './age-message.component.html',
  styleUrls: ['./age-message.component.css']
})
export class AgeMessageComponent {
  age: number = 0;
  message: string = '';
  showMessage() {
    if (this.age > 21) {
      this.message = 'You are an Adult';
    } else if (this.age >= 13 && this.age <= 21) {
      this.message = 'You are a Teenager';
    } else {
      this.message = 'You are a Kid';
    }
  }
}