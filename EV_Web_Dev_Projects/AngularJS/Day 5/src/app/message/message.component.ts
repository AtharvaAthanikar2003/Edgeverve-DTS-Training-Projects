import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  title : string = '';
  msg : string = '';
  val : boolean = true;

  constructor () {
    this.title = "thought for the day";
    this.msg = "Success is achieved through accurate efforts.";
    this.val = false;
  }

  ngOnInit(): void { }

  show() {
    this.val = true;
    return this.val;
  }

  hide() {
    this.val = false;
    return this.val;
  }
}
