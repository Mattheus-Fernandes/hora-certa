import { Component } from '@angular/core';
import { CardNavegationList } from 'src/app/core/types/card-navegation-list.type';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  public cardsNavegation: CardNavegationList = [
    { url: "", iconName: "calendar-plus", title: "Novo agendamento" },
    { url: "", iconName: "calendar-1", title: "Agenda do dia" },
    { url: "", iconName: "bell-ring", title: "Lembretes 24h" },
    { url: "", iconName: "calendar-check", title: "Confirmados" },
    { url: "", iconName: "calendar-x-2", title: "Cancelados" },
    { url: "", iconName: "book-check", title: "Finalizados" },
    { url: "", iconName: "calendar-cog", title: "Alterar atendimento" },
    { url: "", iconName: "calendar-sync", title: "Atualizar status" },
    { url: "", iconName: "calendar-minus", title: "Excluir agendamento" }
  ]
}
