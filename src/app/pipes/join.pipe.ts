import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'join',
  pure: false
})
export class JoinPipe implements PipeTransform {
  transform(array: string[], key: string) {
    let result = array.map(el => key ? el[key] : el);
    return result.join(', ');
  }
}
