import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
}

@Pipe({name: 'userfullname'})
export class UserFullNamePipe implements PipeTransform {
  transform(value: string, lastName?: string): string {
    return lastName ? `${value} ${lastName}` : value;
  }
}
