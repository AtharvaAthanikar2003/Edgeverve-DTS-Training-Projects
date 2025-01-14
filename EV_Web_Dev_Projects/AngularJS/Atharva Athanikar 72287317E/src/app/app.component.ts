import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  password: string = '';
  loginSuccess: boolean = false;
  loginFailed: boolean = false;
  login() {
    if (this.userName === 'admin' && this.password === 'admin') {
      this.loginSuccess = true;
      this.loginFailed = false;
    } else {
      this.loginFailed = true;
      this.loginSuccess = false;
    }
  }
}
