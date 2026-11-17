import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-inbox-toolbar',
  standalone: true,    
  imports: [CommonModule, FormsModule],
  templateUrl: './inbox-toolbar.component.html',
  styleUrls: ['./inbox-toolbar.component.scss']
})
export class InboxToolbarComponent {
  @Output() searchChange = new EventEmitter<string>();

  selectedReceivedRange = 'Any time';
  showCustomDateRange = false;

  fromDate = '';
  toDate = '';
 
  onSearch(value: string): void {
    this.searchChange.emit(value);
  }

  onReceivedRangeChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    this.selectedReceivedRange = value;
    this.showCustomDateRange = value === 'Custom range...';

    if (!this.showCustomDateRange) {
      this.fromDate = '';
      this.toDate = '';
    }
  }
}