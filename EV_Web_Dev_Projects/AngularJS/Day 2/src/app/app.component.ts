import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular02';
  userName: string = '';
  password: string = '';
  loginSuccess = false;
  loginFailed = false;

  login() {
    // Reset login status
    this.loginFailed = this.loginSuccess = false;

    if (this.userName === 'admin' && this.password === 'admin123') {
      this.loginSuccess = true;
    } else {
      this.loginFailed = true;
    }
  }
}
