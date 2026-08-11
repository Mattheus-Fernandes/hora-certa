import { FormControl } from "@angular/forms";

export interface IAppointmentForm {
  customerId: FormControl<string>,
  appointmentDate: FormControl<Date | null>,
  appointmentTime: FormControl<Date | null>,
  serviceName: FormControl<string>,
  observation: FormControl<string | null>
}