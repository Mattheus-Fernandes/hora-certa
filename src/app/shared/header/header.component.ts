import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() statusIcon!: boolean
  @Output() toggleSideBar = new EventEmitter<void>()
  changeIcon = false

  get currentIcon(): string {
    return !this.statusIcon ? "menu" : "x"
  }

  btnSideBar() {
    this.changeIcon = !this.changeIcon
    return this.toggleSideBar.emit()
  }

}
