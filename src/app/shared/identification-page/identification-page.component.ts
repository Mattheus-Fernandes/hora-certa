import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-identification-page',
  templateUrl: './identification-page.component.html',
  styleUrls: ['./identification-page.component.scss']
})
export class IdentificationPageComponent {
  @Input() title!: string
}
