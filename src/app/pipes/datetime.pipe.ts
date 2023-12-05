import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class DatetimePipe implements PipeTransform {

  transform(value: string): unknown {
    if (!value) {
      return '';
    }
    const date = new Date(value);

    const pad = (s: number) => (s < 10 ? '0' + s : s.toString());

    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${month}-${day}-${year} ${hours}:${minutes}:${seconds}`;

  }

}
