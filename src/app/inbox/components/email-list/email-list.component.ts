
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-list.component.html',
  styleUrl: './email-list.component.scss'
})
export class EmailListComponent {

  activeTab = 'All';

  emails = [
    {
      id: 1,
      sender: 'Kelly Ramos',
      initials: 'KR',
      subject: 'Coral Ridge Towers - New Business Submission',
      time: '12:46 PM',
      score: 78,
      appetite: 'In Appetite',
      missing: 2,
      selected: true
    },
    {
      id: 2,
      sender: 'Jordan Price',
      initials: 'JP',
      subject: 'Atlas Hospitality Group - Property Renewal',
      time: '11:32 AM',
      score: 55,
      appetite: 'Borderline',
      missing: 3,
      selected: false
    },
    {
      id: 3,
      sender: 'Michael Scott',
      initials: 'MS',
      subject: 'Commercial Property Submission',
      time: '10:15 AM',
      score: 32,
      appetite: 'Out of Appetite',
      missing: 1,
      selected: false
    },
    {
      id: 4,
      sender: 'Sarah Johnson',
      initials: 'SJ',
      subject: 'Updated Statement of Values',
      time: '09:45 AM',
      score: 89,
      appetite: 'In Appetite',
      missing: 0,
      selected: false
    }
  ];

  selectTab(tab: string): void {
    this.activeTab = tab;
  }

  getScoreClass(score: number): string {
    if (score >= 70) return 'score-high';
    if (score >= 40) return 'score-medium';
    return 'score-low';
  }

}
