import { Component } from '@angular/core';
import { CardNavegationList } from 'src/app/core/types/card-navegation-list.type';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

  cardsNavegationList: CardNavegationList = [
      {
        title: "Cadastrar cliente",
        description: "Agende um novo atendimento para sua cliente",
        url: "",
        iconStyle: "bg-pink-100 text-pink-800",
        redirectStyle: "bg-pink-100 text-pink-800",
        iconName: "user-round-plus"
      },
      {
        title: "Minhas clientes",
        description: "Confira os agendamentos programados para hoje",
        url: "",
        iconStyle: "bg-green-100 text-green-800",
        redirectStyle: "bg-green-100 text-green-800",
        iconName: "book-search"
      },
      {
        title: "Editar cliente",
        description: "Veja as clientes que receberão o lembrete de confirmação",
        url: "", 
        iconStyle: "bg-yellow-100 text-yellow-800",
        redirectStyle: "bg-yellow-100 text-yellow-800",
        iconName: "pencil"
      },
      {
        title: "Excluir cliente",
        description: "Busque todos os agendamentos salvos",
        url: "",
        iconStyle: "bg-slate-100 text-slate-700",
        redirectStyle: "bg-slate-100 text-slate-700",
        iconName: "trash-2"
      },
      
    ]

}
