import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myDate',
  pure: false
})

export class MyDatePipe implements PipeTransform {
  transform(value: Date, format: string, locale?: string, timezone?: string): string {
    let date = new Date(value);
    let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString('uk-UA', options );
  }
}
