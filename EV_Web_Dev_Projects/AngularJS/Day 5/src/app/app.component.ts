// app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'forms';
  // cars = [
  //   { id: 1, name: "BMW Hyundai", model: "X5", year: 2020 },
  //   { id: 2, name: "KIA", model: "Sportage", year: 2021 },
  //   { id: 3, name: "Volkswagen", model: "Golf", year: 2019 },
  //   { id: 4, name: "Renault", model: "Clio", year: 2018 },
  //   { id: 5, name: "Benz", model: "C-Class", year: 2022 }
  // ];
  // selected: { id: number, name: string, model: string, year: number }[] = [];
  // title = 'Angular Testing';
  title = 'User Management System';

  constructor(private router: Router) {}

  navigateToCreateUser() {
    this.router.navigate(['create-user']);
  }

  navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }
}
