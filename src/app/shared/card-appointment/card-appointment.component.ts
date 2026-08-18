import { Component, Input } from '@angular/core';
import { IAppointmentRes } from 'src/app/core/interfaces/apppointment-res.interface';

@Component({
  selector: 'app-card-appointment',
  templateUrl: './card-appointment.component.html',
  styleUrls: ['./card-appointment.component.scss']
})
export class CardAppointmentComponent {
  @Input() data!: IAppointmentRes

  colorStatus() {
     switch (this.data.status) {
      case "CONFIRMED":
        return "bg-green-200 text-green-800"
      case "CANCELED":
        return "bg-red-200 text-red-800"
      case "COMPLETED":
        return "bg-blue-200 text-blue-800"
      default:
        return "bg-yellow-200 text-yellow-800"
    }
  }
}
