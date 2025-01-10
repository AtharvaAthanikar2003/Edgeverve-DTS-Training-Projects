import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
 selector: 'app-view-user',
 templateUrl: './view-user.component.html',
 styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{
  constructor(private auth: AuthService, private route: ActivatedRoute){}
  id : any;
  userDetails: any;
  isLoaded:boolean = false;
  ngOnInit(): void {
  this.route.params.subscribe(res=>{
    this.id = res['id'];
    //console.log(this.id);

    this.auth.getUserById(this.id).subscribe(res=>{
        this.userDetails = res;
        //console.log(this.userDetails);
        this.isLoaded = true;
    });
  });
  }
}