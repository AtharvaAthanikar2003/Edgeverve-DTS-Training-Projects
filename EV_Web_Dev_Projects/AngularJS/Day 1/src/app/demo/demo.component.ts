import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  courseName: string = "Angular";

  changeName() {
    this.courseName = "Typescript";
  }

  changeNameWithThis(course: any) {
    this.courseName = course;
  }

  ///////////////////////////

  age: number | null = null;
  yearOfBirth: number | null = null;

  calculateYearOfBirth(): void {
    if (this.age && this.age > 0) {
      const currentYear = new Date().getFullYear();
      this.yearOfBirth = currentYear - this.age;
    } else {
      this.yearOfBirth = null; // Clear the value if invalid age is entered
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
