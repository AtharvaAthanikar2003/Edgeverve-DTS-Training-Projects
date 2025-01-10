import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphaCase'
})
export class AlphaCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( args == 'U' ) {
      return value.toUpperCase();
    } else if ( args == 'L' ) {
      return value.toLowerCase();
    } else if ( args == 'T' ) {
      var i = 0;
      var titleCase = '';
      value = value.toLowerCase();
      var temp = value.split(' ');
      for (var i = 0; i < temp.length; i++) {
        var word = temp[i];
        word = word.charAt(0).toUpperCase() + word.slice(1); 
        titleCase += (i === 0 ? word : ' ' + word); 
      }
      console.log(titleCase);
      return titleCase;   
    } else {
      return value;
    }
  }

}
