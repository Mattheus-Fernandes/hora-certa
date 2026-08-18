import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusAppointment'
})
export class StatusAppointmentPipe implements PipeTransform {

  transform(status: string): string {

    switch (status) {
      case "SCHEDULED":
        return "Agendado"
      case "CONFIRMED":
        return "Confirmado"
      case "CANCELED":
        return "Cancelado"
      case "COMPLETED":
        return "Finalizado"
      default:
        return ""
    }

  }

}
