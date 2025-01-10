import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})

export class UserDashboardComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router) { }

  allUsers : any;
  count = 0;
  ngOnInit(): void {
    this.auth.getAllUsers().subscribe(res=>{
      this.allUsers= res;
      console.log(this.allUsers);
      this.count=this.allUsers.length;
    });
  }

  delete(id : any) {
    if (confirm("Are you sure?")==true) {
      this.auth.deleteUserBydId(id).subscribe(res=>{
        location.reload();
      })
    } else {
      this.router.navigate(['dashboard'])
    }
  }

}
