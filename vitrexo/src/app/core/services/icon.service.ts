import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root' // Makes it available everywhere
})
export class IconService {
    
  private icons = ['linkedin', 'x', 'facebook', 'instagram', 'check'];

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerIcons();
  }

  private registerIcons() {
    this.icons.forEach(icon => {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/svg-icons/${icon}.svg`)
      );
    });
  }
}
