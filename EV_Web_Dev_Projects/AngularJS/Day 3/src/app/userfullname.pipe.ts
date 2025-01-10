import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfullname'
})

export class UserfullnamePipe implements PipeTransform {
  transform(firstName: string, ...lastName: string[]): string {
    return firstName + ' ' + lastName.join(' ');
  }
}