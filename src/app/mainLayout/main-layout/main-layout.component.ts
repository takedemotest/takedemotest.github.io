import { Component } from '@angular/core';
import { HeaderComponent } from '../../commonComponents/header/header.component';
import { SidebarComponent } from '../../commonComponents/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, SidebarComponent, CommonModule, RouterOutlet ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
   isOpen=false;
}
