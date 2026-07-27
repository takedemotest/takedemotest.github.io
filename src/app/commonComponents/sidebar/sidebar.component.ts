import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from '../../../../projects/shared-ui/src/lib/components/navigation/navigation.component';
import { NavigationService } from '../../../../projects/shared-ui/src/lib/components/navigation/navigation.service';
import { PROFILE_NAV } from '../../core/config/dashboard-navigation-config';
import { NavItem } from '../../../../projects/shared-ui/src/lib/models/navigation-model';
import { LOGOUT } from '../../global/store/auth/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'sidebar',
  imports: [MatIconModule, NavigationComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private navService = inject(NavigationService);
  private store = inject(Store);

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
