import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, active: boolean): string {
    if (active && value.length > 75) {
      return value.substr(0, 75) + '...';
    } else {
      return value;
    }
  }
}
