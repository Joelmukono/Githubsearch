import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'touppercase'
})
export class TouppercasePipe implements PipeTransform {

  transform(value:string): any {
    value.toLocaleUpperCase();
    return value;
  }

}
