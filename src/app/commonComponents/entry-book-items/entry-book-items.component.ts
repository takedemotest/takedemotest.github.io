import { Component, HostListener, inject, Input } from '@angular/core';
import { EntryList } from '../entry-book/entry-config';
import { NewEntryService } from '../../core/services/new-entry.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entry-book-items',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './entry-book-items.component.html',
  styleUrl: './entry-book-items.component.scss'
})
export class EntryBookItemsComponent {
  NewEntryService = inject(NewEntryService);
  @Input() entryArray!: EntryList;
  @HostListener('click')
  itemClick(){
    this.NewEntryService.entryList.set([
      ...this.NewEntryService.entryList().map(
        (item)=>{
          if(item.id === this.entryArray.id){
            return {
            ...item,
            done: !item.done
            }
          }
          return item;
        }
      )
    ])
  }
}
