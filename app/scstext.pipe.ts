import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scstext'
})
export class ScstextPipe implements PipeTransform {

  transform(value: any): any {
    return "<h1>"+value+"</h1>"
  }

}
