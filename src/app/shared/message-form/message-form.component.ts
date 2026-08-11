import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent {
  @Input() text!: string
  @Input() styleProp!: string
  @Input() iconName!: string

  
  messageStyle(styleProp: string): string {
    return styleProp === "success" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
  }
}
