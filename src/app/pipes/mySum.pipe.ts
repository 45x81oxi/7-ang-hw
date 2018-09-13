import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mySum',
  pure: false
})

export class MySumPipe implements PipeTransform {
  transform(arr: any): number {
    if (!arr.length) return 0;
    return arr.reduce((sum, current) => {
      return sum + current;
    }, 0) ;
  }
}
