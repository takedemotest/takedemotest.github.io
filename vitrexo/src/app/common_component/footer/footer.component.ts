import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from '../../core/services/icon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    constructor(private iconService: IconService) { }

socialLinks = [
  {
    icon: 'linkedin',
    url: '#'
  },
  {
    icon: 'X',
    url: '#'
  },
  {
    icon: 'instagram',
    url: '#'
  },
  {
    icon: 'facebook',
    url: '#'
  }
];


}
