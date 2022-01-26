import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileNumber'
})
export class MobileNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(undefined !== value && value.length === 12){
      //(+97)-12345 67891
      return '(+' + value.substring(0,2)+ ')-'+ value.substring(2,7)+' '+value.substring(7);
    }
    return '';
  }

}
