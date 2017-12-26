import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PKMenu, PKMenuItem } from './app.routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  router: Router;

  constructor(_router: Router) {
    this.router = _router;
  }

  menuItems: PKMenuItem[] = PKMenu;

  closeDropDowns(event: Event): void {
    for (let i = 0; i < this.menuItems.length; i++) {
      this.menuItems[i].hideChildren = true;
    }
  }

  showHideChilds(menuItem: PKMenuItem, event: Event): void {
    event.stopPropagation();
    if (menuItem.children.length === 0) {
      this.router.navigate([menuItem.route]);
    }
    for (let i = 0; i < this.menuItems.length; i++) {
      if (menuItem.key === this.menuItems[i].key) {
        this.menuItems[i].hideChildren = !this.menuItems[i].hideChildren;
      } else {
        this.menuItems[i].hideChildren = true;
      }
    }
  }

}
