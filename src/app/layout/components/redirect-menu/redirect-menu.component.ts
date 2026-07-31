import { Component } from '@angular/core';
import { RedirectCardList } from '../../types/redirect-card-list.type';

@Component({
  selector: 'app-redirect-menu',
  templateUrl: './redirect-menu.component.html',
  styleUrls: ['./redirect-menu.component.scss']
})
export class RedirectMenuComponent {

  public actions: RedirectCardList = [
    {
      url: "/appointments",
      title: 'Agendamento',
      iconName: 'calendar-days',
      colSpan: false
    },
    {
      url: "/customers",
      title: 'Cliente',
      iconName: 'square-user',
      colSpan: false
    },
    {
      url: "/seetings",
      title: 'Configurar WhatsApp',
      iconName: 'settings',
      colSpan: true
    }
  ]
}
