import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check',
  standalone: true
})
export class CheckPipe implements PipeTransform {

  transform(value: number, para: string): any {

    if (para == "Prime") {
      var Flag = true;
      var Cnt = 0;
      for (Cnt = 2; Cnt < value; Cnt++) {
        if ((value % Cnt) == 0) {
          Flag = false;
          break;
        }
      }
      if (Flag == true) {
        return "It is prime number";
      }
      else {
        return "It is not prime number";
      }
    }

    if (para == "Even") {
      if (value % 2 == 0) {
        return "The number is even.";
      }

    }

    if (para == "Odd") {
      if (value % 2 == 0) {
        return "The number is even.";
      }
      else {
        return "The number is odd.";

      }
    }
  }


}
