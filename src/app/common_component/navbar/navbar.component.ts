import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from '../../core/services/icon.service';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   authText:string = 'Login';

    constructor(private iconService: IconService) { }

}
