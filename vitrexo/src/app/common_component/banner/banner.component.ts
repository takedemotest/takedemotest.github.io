import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  mouseX = 0;
  mouseY = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
    this.mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
  }

}
