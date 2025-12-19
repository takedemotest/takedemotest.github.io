import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common_component/navbar/navbar.component';
import { BannerComponent } from './common_component/banner/banner.component';
import { FooterComponent } from './common_component/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BannerComponent, AboutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
}
