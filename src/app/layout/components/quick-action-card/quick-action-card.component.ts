import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quick-action-card',
  templateUrl: './quick-action-card.component.html',
  styleUrls: ['./quick-action-card.component.scss']
})
export class QuickActionCardComponent {
  @Input() url!: string
  @Input() icon!: string
  @Input() title!: string | undefined
}
