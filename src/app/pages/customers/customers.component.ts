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
      description: "Cadastre uma nova cliente para seus atendimentos",
      url: "/menu/new-customer",
      iconStyle: "bg-pink-100 text-pink-800",
      redirectStyle: "bg-pink-100 text-pink-800",
      iconName: "user-round-plus"
    },
    {
      title: "Minhas clientes",
      description: "Visualize e consulte todas as suas clientes cadastradas",
      url: "",
      iconStyle: "bg-green-100 text-green-800",
      redirectStyle: "bg-green-100 text-green-800",
      iconName: "book-search"
    },
    {
      title: "Editar cliente",
      description: "Atualize os dados e informações de uma cliente",
      url: "",
      iconStyle: "bg-yellow-100 text-yellow-800",
      redirectStyle: "bg-yellow-100 text-yellow-800",
      iconName: "pencil"
    },
    {
      title: "Excluir cliente",
      description: "Remova uma cliente da sua lista de cadastradas",
      url: "",
      iconStyle: "bg-slate-100 text-slate-700",
      redirectStyle: "bg-slate-100 text-slate-700",
      iconName: "trash-2"
    },

  ]

}
