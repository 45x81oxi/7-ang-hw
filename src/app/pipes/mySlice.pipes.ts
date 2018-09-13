import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'myslice'
})
export class MySlicePipes implements PipeTransform {
  transform(value: string){
    return value.slice(0, 4);
  }
}
