import { Component } from '@angular/core';
import { CardNavegationList } from 'src/app/core/types/card-navegation-list.type';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {

  cardsNavegationList: CardNavegationList = [
    {
      title: "Novo agendamento",
      description: "Agende um novo atendimento para sua cliente",
      url: "/menu/new-appointment",
      iconStyle: "bg-pink-100 text-pink-800",
      redirectStyle: "bg-pink-100 text-pink-800",
      iconName: "calendar-plus"
    },
    {
      title: "Agenda do dia",
      description: "Confira os agendamentos programados para hoje",
      url: "/menu/today-work",
      iconStyle: "bg-purple-100 text-purple-800",
      redirectStyle: "bg-purple-100 text-purple-800",
      iconName: "calendar-check"
    },
    {
      title: "Lembrete 24h",
      description: "Veja as clientes que receberão o lembrete de confirmação",
      url: "",
      iconStyle: "bg-yellow-100 text-yellow-800",
      redirectStyle: "bg-yellow-100 text-yellow-800",
      iconName: "bell-ring"
    },
    {
      title: "Meus agendamentos",
      description: "Busque todos os agendamentos salvos",
      url: "/menu/my-appointments",
      iconStyle: "bg-orange-100 text-orange-700",
      redirectStyle: "bg-orange-100 text-orange-700",
      iconName: "book-search"

    },
    {
      title: "Confirmados",
      description: "Visualize as clientes que confirmaram o atendimento",
      url: "", iconStyle: "bg-green-100 text-green-800",
      redirectStyle: "bg-green-100 text-green-800",
      iconName: "circle-check"
    },
    {
      title: "Cancelados",
      description: "Confira os atendimentos que foram cancelados",
      url: "",
      iconStyle: "bg-red-100 text-red-800",
      redirectStyle: "bg-red-100 text-red-800",
      iconName: "circle-x"
    },
    {
      title: "Finalizados",
      description: "Visualize os atendimentos que já foram realizados",
      url: "",
      iconStyle: "bg-blue-100 text-blue-800",
      redirectStyle: "bg-blue-100 text-blue-800",
      iconName: "flag"
    },
    {
      title: "Alterar agendamento",
      description: "Edite a data, hora ou detalhes do seu atendimento",
      url: "", iconStyle: "bg-purple-100 text-purple-800",
      redirectStyle: "bg-purple-100",
      iconName: "pencil"
    },
    {
      title: "Excluir agendamento",
      description: "Remova um atendimento da sua agenda",
      url: "", iconStyle: "bg-slate-100 text-slate-800",
      redirectStyle: "bg-slate-100 text-slate-800",
      iconName: "trash-2"
    },
  ]

}
