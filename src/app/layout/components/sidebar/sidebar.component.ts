import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkSideBarList } from '../../types/link-sidebar-list.type';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() toggle = false
  @Output() toggleSidebar = new EventEmitter<boolean>()

  linkSidebarList: LinkSideBarList = [
    { routerLink: "appointments", title: "Agendamentos" },
    { routerLink: "customers", title: "Clientes" },
    { routerLink: "whatsapp", title: "WhatsApp" }
  ]

  btnLink() {
    return this.toggleSidebar.emit(false)
  }
}
