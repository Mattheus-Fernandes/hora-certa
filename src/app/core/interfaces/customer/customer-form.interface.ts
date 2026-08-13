import { FormControl } from "@angular/forms";

export interface ICustomerForm {
    name: FormControl<string>,
    lastname: FormControl<string>,
    email: FormControl<string>,
    phone: FormControl<string>,
    observation: FormControl<string | null>
}