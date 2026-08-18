import { ICustomerBodyForm } from "./customer/customer-body-form.interface"
import { ICustomer } from "./customer/customer.interface"

export interface IAppointmentRes {
    customerId: string
    appointmentDate: string
    appointmentTime: string
    serviceName: string
    status: string
    observation: string
    customer: ICustomerBodyForm
}