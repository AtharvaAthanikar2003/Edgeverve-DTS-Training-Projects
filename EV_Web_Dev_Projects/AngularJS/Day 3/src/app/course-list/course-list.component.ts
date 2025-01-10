// src/app/course-list/course-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<div class="child">Child Component</div>',
  styles: [`
    .child{
      background-color: lightcoral;
      padding: 10px;
    }`]
})

export class CourseListComponent {

}