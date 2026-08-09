import { Component } from '@angular/core';
import { ButtonNavegationList } from '../core/types/button-navegation-list.type';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  buttonNavegationList: ButtonNavegationList = [
    { routerLink: "appointments", title: "Agendamentos", iconName: "calendar" },
    { routerLink: "customers", title: "Clientes", iconName: "users" },
    { routerLink: "whatsapp", title: "WhatsApp", iconName: "phone" },
  ]

  toggleSideBar = false
  changeStatusIcon = false

  getToggleSideBar(event: boolean | void) {
    this.changeStatusIcon = event as boolean
    this.toggleSideBar = !this.toggleSideBar
  }

}
