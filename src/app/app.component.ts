import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PKMenu, PKMenuItem } from './app.menu';
import { ProjectKUtils } from './app.utils';
import { ILoggedInUser } from './IGlobal';

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
      this.showHideMenu();
    }
    for (let i = 0; i < this.menuItems.length; i++) {
      if (menuItem.key === this.menuItems[i].key) {
        this.menuItems[i].hideChildren = !this.menuItems[i].hideChildren;
      } else {
        this.menuItems[i].hideChildren = true;
      }
    }
  }

  showHideMenu(): void {
    const navId = 'nav-container';
    const menu = document.getElementById(navId);

    if (!menu.classList.contains('minimize')) {
      menu.classList.add('minimize');
    } else {
      menu.classList.remove('minimize');
    }
  }

  getUserDetails(): ILoggedInUser {
    return ProjectKUtils.prototype.getLoggedInUserDetails();
  }

}
