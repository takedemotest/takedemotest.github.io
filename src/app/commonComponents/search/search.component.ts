import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
   standalone: true,
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent { 
  searchText = '';

  ngOnInit(){
  }
  @Input () data : any[]=[]
  @Output() resultChange = new EventEmitter<any[]>();

  onSearch(){
    const filtered = this.data.filter(item=>
      Object.values(item)
      .join(' ')
      .toLowerCase()
      .includes(this.searchText.toLowerCase())
    );
    this.resultChange.emit(filtered);
  };
}


