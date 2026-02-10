import { Component, computed, inject, signal, Signal} from '@angular/core';
import { NewEntryService } from '../../core/services/new-entry.service';
import { EntryBookItemsComponent } from '../entry-book-items/entry-book-items.component';
import { CommonModule } from '@angular/common';
import { EntryList } from './entry-config';

@Component({
  selector: 'app-entry-book',
  standalone:true,
  imports: [EntryBookItemsComponent, CommonModule],
  templateUrl: './entry-book.component.html',
  styleUrl: './entry-book.component.scss'
})
export class EntryBookComponent {

  IsDisabled = true
  newEntryService = inject(NewEntryService);
  seclectedItems!:Signal<number>;

  entriesArray = this.newEntryService.entryList;

  onInput(value:string){
    this.IsDisabled = !value || !value.trim();
  }
    
  addItmes(name:string, e:SubmitEvent){
        e.preventDefault();
        const newItem:EntryList = {
          id: crypto.randomUUID(),
          name,
          done:false
        }
        this.newEntryService.entryList.set([
          newItem,
          ...this.newEntryService.entryList()
        ])
        const target = e.target as HTMLFormElement;
        target.reset();
  }

  ngOnInit(){
     this.seclectedItems = computed(()=>{
      return this.entriesArray().filter((item)=>
        item.done
      ).length
     })
  }
 


}


