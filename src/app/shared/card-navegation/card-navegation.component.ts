import { Component, Input } from '@angular/core';
import { ICardNavegation } from 'src/app/core/interfaces/card-navegation.interface';

@Component({
  selector: 'app-card-navegation',
  templateUrl: './card-navegation.component.html',
  styleUrls: ['./card-navegation.component.scss']
})
export class CardNavegationComponent {
  @Input() cardNavegation!: ICardNavegation
}
