import { Component, inject, output } from '@angular/core';
import { NavigationComponent } from '../../../../projects/shared-ui/src/lib/components/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../../../projects/shared-ui/src/lib/components/navigation/navigation.service';
import { Store } from '@ngrx/store';
import { SIDEBAR_NAVIGATION } from '../../core/config/dashboard-navigation-config';
import { SearchComponent } from '../search/search.component';
import { selectUser } from '../../global/store/auth/auth.selectors';
import { CommonModule } from '@angular/common';
import { IconService } from '../../core/services/icon.service';
import { HEADER_SVG_ICON } from './header-icon.svg';

@Component({
  selector: 'top-header',
  imports: [CommonModule, MatIconModule, NavigationComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isOpen: boolean = false;

  private navService = inject(NavigationService);
  private store = inject(Store);
  private icon = inject(IconService);
  toggleSidebar = output<void>();

  user$ = this.store.select(selectUser);

  constructor(){
      this.icon.registerIcons(HEADER_SVG_ICON);
  }

  ngOnInit() {
    this.navService.setUserRole('ADMIN');
    this.navService.registerMenu('sidebar-menu', SIDEBAR_NAVIGATION);
  }

  onResultChange(filteredData: any[]) {}

}
