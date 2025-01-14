import { Component } from '@angular/core';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  userName: string = '';
  password: string = '';
  loginSuccess: boolean = false;
  loginFailed: boolean = false;
  login(){
    if(this.userName == 'admin' && this.password == 'admin'){
      this.loginSuccess = true;
      this.loginFailed = false;
    } else {
      this.loginFailed = true;
      this.loginSuccess =false;
    }
  }
}