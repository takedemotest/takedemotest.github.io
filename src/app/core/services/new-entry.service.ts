import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import {
  DUMMY_ENTRIES_ARRAY,
  EntryList,
} from '../../commonComponents/entry-book/entry-config';

@Injectable({
  providedIn: 'root',
})
export class NewEntryService {
  entryList: WritableSignal<EntryList[]> = signal<EntryList[]>([]);

  constructor() {
    this.entryList.set(this.getItemFromTheStorage());
  }

  persist = effect(() => {
    localStorage.setItem('ng-entryList3', JSON.stringify(this.entryList()));
  });

  private getItemFromTheStorage(): EntryList[] {
    const data = localStorage.getItem('ng-entryList');
    return data ? JSON.parse(data) : DUMMY_ENTRIES_ARRAY;
  }
}
