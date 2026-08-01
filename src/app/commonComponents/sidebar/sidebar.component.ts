import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PROFILE_NAV } from '../../core/config/dashboard-navigation-config';
import { LOGOUT } from '../../global/store/auth/auth.actions';
import { Store } from '@ngrx/store';
import { SIDEBAR_SVG_ICON } from './sidebar-icon.svg';
import { IconService } from '@takedemotest/krishito-ui-icons';
import { NavigationComponent, NavigationService, NavItem } from '@takedemotest/krishito-ui-navigation';

@Component({
  selector: 'sidebar',
  imports: [MatIconModule, NavigationComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private navService = inject(NavigationService);
  private store = inject(Store);
  private icon = inject(IconService);

  constructor(){
     this.icon.registerIcons(SIDEBAR_SVG_ICON);
  }

  ngOnInit() {
    this.navService.registerMenu('profile-menu', PROFILE_NAV);

    this.navService.menuAction$.subscribe((item: NavItem) => {
      this.menuAction(item.action, item);
    });
  }

  menuAction(action: string | undefined, item: NavItem) {
    if (action === 'logout') {
      this.logout();
    }
  }

    logout () {
    this.store.dispatch(LOGOUT())
  }
}
