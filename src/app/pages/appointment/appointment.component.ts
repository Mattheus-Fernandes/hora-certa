import { Component } from '@angular/core';
import { CardNavegationList } from 'src/app/core/types/card-navegation-list.type';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  public cardsNavegation: CardNavegationList = [
    { url: "/navegation/new-appointment", iconName: "calendar-plus", title: "Novo agendamento" },
    { url: "/navegation/today", iconName: "calendar-1", title: "Agenda do dia" },
    { url: "/navegation/reminds", iconName: "bell-ring", title: "Lembretes 24h" },
    { url: "/navegation/confirmeds", iconName: "calendar-check", title: "Confirmados" },
    { url: "/navegation/cancels", iconName: "calendar-x-2", title: "Cancelados" },
    { url: "/navegation/finisheds", iconName: "book-check", title: "Finalizados" },
    { url: "/navegation/update-appoinment", iconName: "calendar-cog", title: "Alterar atendimento" },
    { url: "/navegation/update-status", iconName: "calendar-sync", title: "Atualizar status" },
    { url: "/navegation/delete", iconName: "calendar-minus", title: "Excluir agendamento" }
  ]
}
