import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
 selector: 'app-update-user',
 templateUrl: './update-user.component.html',
 styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
 constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private auth: AuthService){}
 uid: any;
 userDetails: any;
 updateForm: FormGroup = new FormGroup({});
 dataloaded: boolean = true;
 ngOnInit(): void {
   this.dataloaded = false;
   this.route.params.subscribe(res=>{
     this.uid = res['id'];
     //console.log(this.id);
   });

   if(this.uid !== ''){
     this.auth.getUserById(this.uid)
     .toPromise()
     .then(res=>{
       this.userDetails = res;
       console.log(this.userDetails);
   this.updateForm = this.fb.group({
   'name': new FormControl(this.userDetails.name),
   'email': new FormControl(this.userDetails.email),
   'gender': new FormControl(this.userDetails.gender),
   'mobile': new FormControl(this.userDetails.mobile),
   'address': new FormControl(this.userDetails.address),
   'createddate': new FormControl(this.userDetails.createddate)
 })
 this.dataloaded = true;
 }).catch(err=>{
   console.log(err);
   this.dataloaded = true;
 });
}
}

msg = '';
isRight = '';
updateUser(){
 let name = this.updateForm.get('name')?.value;
   let email = this.updateForm.get('email')?.value;
   let mobile = this.updateForm.get('mobile')?.value;
   let address = this.updateForm.get('address')?.value;
   let createdDate = this.updateForm.get('createddate')?.value;
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
     this.auth.updateUser(this.uid, this.updateForm.value).subscribe(res=>{
       this.msg = "User details updated successfully redirecting to view user...";
       this.isRight = 'valid';
       setTimeout(()=>{
         this.router.navigate(['dashboard/user/view/' + this.uid]);
       }, 3000);
     });
}
}
back(){
 this.router.navigate(['dashboard']);
}
}