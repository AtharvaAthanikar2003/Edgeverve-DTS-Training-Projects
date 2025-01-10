import { Component } from '@angular/core';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.css']
})
export class Demo02Component {
  title: string;
  description: string;

  constructor() {
    this.title = 'Demo 02 Component';
    this.description = 'This is a demo component for AngularJS directives.';
  }
  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
