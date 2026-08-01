import { Component, inject, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { SIDEBAR_NAVIGATION } from '../../core/config/dashboard-navigation-config';
import { SearchComponent } from '../search/search.component';
import { selectUser } from '../../global/store/auth/auth.selectors';
import { CommonModule } from '@angular/common';
import { HEADER_SVG_ICON } from './header-icon.svg';
import { IconService } from '@takedemotest/krishito-ui-icons';
import { NavigationComponent, NavigationService } from '@takedemotest/krishito-ui-navigation';

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
