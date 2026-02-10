import { CommonModule } from '@angular/common';
import { Component, ContentChild, contentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() cardTitle!:string;

  @ContentChild('footerRef', {read:ElementRef})
  isFooterEl?:ElementRef;

  hasFooter = false;

  ngAfterContentInit(){
    this.hasFooter = !!this.isFooterEl;
  }
}
