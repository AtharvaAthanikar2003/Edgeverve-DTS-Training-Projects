import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseName: string="Angular"
  num:number=7;

  imgUrl: string= 'assets/imgs/Capture.PNG';
  title="Angular Programing"
  isUnchanged=false;

  noOfColoumns=2;
  noOfRows=2;
}
