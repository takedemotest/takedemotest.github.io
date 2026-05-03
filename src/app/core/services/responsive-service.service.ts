import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
private mediaQuery = window.matchMedia('(max-width:1084px)');
isMobile = signal(this.mediaQuery.matches);

  constructor() { 
    this.mediaQuery.addEventListener('change', (e)=>this.isMobile.set(e.matches))
  }
}
