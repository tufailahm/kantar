import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addTitle'
})
export class AddTitlePipe implements PipeTransform {

  transform(value: string,before:string,after:string): unknown {
    let newString = `${before} ${value} ${after}`
    return newString;
  }

}
