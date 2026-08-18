import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return 'N/A'

    let phone = value.replace(/\D/g, '');

    if (phone.startsWith('55')) {
      phone = phone.substring(2)
    }

    if (phone.length !== 11) {
      return value;
    }

    return phone.replace(
      /^(\d{2})(\d{5})(\d{4})$/,
      '($1) $2-$3'
    )
  }

}
