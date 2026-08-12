import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() iconName!: string
  @Input() title!: string
  @Input() styleProp!: string
  @Input() typeBtn!: string
  @Input() link!: string

  styleButton(style: string) {

    switch(style) {

      case "save":
        return "bg-green-200 text-green-800"

      case "cancel":
        return "bg-red-200 text-red-800"

      default:
        return "bg-gray-50 text-blue-950"
    }

  }

}
