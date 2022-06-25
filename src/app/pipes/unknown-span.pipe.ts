import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unknownSpan',
})
export class UnknownSpanPipe implements PipeTransform {
  transform(value: any): string {
    if (value === null || value === '' || value === undefined) {
      return 'Unknown value';
    } else {
      return value;
    }
  }
}
