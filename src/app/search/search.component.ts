
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Input() items: any[] = [];
  searchTerm: string = '';

  get filteredItems(): any[] {
    if (this.searchTerm.trim() === '') {
      
      return this.items;
    } else {
    
      return this.items.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  }
}