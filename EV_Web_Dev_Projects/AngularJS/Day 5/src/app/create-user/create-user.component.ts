import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}
  createForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      mobile: new FormControl(''),
      address: new FormControl(''),
      createddate: new FormControl(''),
    });
  }
  back() {
    this.router.navigate(['dashboard']);
  }
  msg: string = '';
 isRight = '';
 createUser(){
   let name = this.createForm.get('name')?.value;
   let email = this.createForm.get('email')?.value;
   let mobile = this.createForm.get('mobile')?.value;
   let address = this.createForm.get('address')?.value;
   if(name.trim().length == 0){
     this.msg = 'Name is required...!';
     this.isRight = 'invalid';
   }
   else if(email.trim().length == 0){
     this.msg = 'Email is required...!'
     this.isRight = 'invalid';
   }
   else if (mobile.trim().length === 0 || mobile.trim().length !== 10) {
     this.msg = "Invalid mobile number";
     this.isRight = 'invalid';
   }   
   else if(address.trim().length == 0 || address.length < 10){
     this.msg = "Address is required atleast 10 characters";
     this.isRight = 'invalid';
   }
   else{
     this.auth.createUser(this.createForm.value).subscribe(res=>{
       this.msg = "User created successfully redirecting to dashboard...";
       this.isRight = 'valid';
       setTimeout(()=>{
         this.router.navigate(['dashboard']);
       }, 3000);
     });
   }
 }
}
