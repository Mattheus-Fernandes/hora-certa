import { Component } from '@angular/core';
import { RedirectCardList } from '../../types/redirect-card-list.type';

@Component({
  selector: 'app-fast-access',
  templateUrl: './fast-access.component.html',
  styleUrls: ['./fast-access.component.scss']
})
export class FastAccessComponent {

  fastAccessLinks: RedirectCardList = [
    {url: "", iconName: "calendar-plus"},
    {url: "", iconName: "user-plus"},
    {url: "", iconName: "calendar-check-2"},
  ]

}
