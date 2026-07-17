import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CORE_SVG_ICONS } from '../config/core-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {
    
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  constructor() {
    this.registerIcons(CORE_SVG_ICONS);
  }

   registerIcons(iconNames:string[]):void {
    iconNames.forEach(icon => {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/svg-icons/${icon}.svg`)
      );
    });
  }
}
