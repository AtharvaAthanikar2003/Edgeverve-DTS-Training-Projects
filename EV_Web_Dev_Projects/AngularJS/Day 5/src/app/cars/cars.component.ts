// cars.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  @Input() cars: { id: number, name: string, model: string, year: number }[] = [];
}
