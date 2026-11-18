
import { Component, Input } from '@angular/core';
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
      insuredName: 'Coral Ridge Towers Condominium Association',
      time: '12:46 PM',
      score: 78,
      appetite: 'In Appetite',
      missing: 2,
      selected: true,
      unread: true,
      preview: 'Hi team, Please find attached our new business submission for Coral Ridge Towers Condominium Association, a 2-',
      category: 'New submission',
      coverageType: 'Core',
      opportunity: 'OPP-48224',
      clearanceStatus: 'Pending clearance',
      attachmentLabel: 'ACORD',
      attachmentTitle: 'ACORD 125 – Coral Ridge.pdf, ACORD 140 – Coral Ridge.pdf, SOV_Coral_Ridge_Towers.xlsx'
    },
    {
      id: 2,
      sender: 'Jordan Price',
      initials: 'JP',
      subject: 'Atlas Hospitality Group - Property Renewal',
      insuredName: 'Atlas Hospitality Group',
      time: '11:32 AM',
      score: 55,
      appetite: 'Borderline',
      missing: 3,
      selected: false,
      unread: true,
      preview: 'Hi team, We are approaching the renewal date for Atlas Hospitality Group. Please find the updated property information and renewal documents attached.',
      category: 'Renewal',
      coverageType: 'Core',
      opportunity: 'OPP-48225',
      clearanceStatus: 'Needs info',
      attachmentLabel: 'SOV',
      attachmentTitle: 'Atlas_Property_SOV.xlsx, Atlas_Loss_Runs.pdf'
    },
    {
      id: 3,
      sender: 'Michael Scott',
      initials: 'MS',
      subject: 'Commercial Property Submission',
      insuredName: 'Commercial Property Group',
      time: '10:15 AM',
      score: 32,
      appetite: 'Out of Appetite',
      missing: 1,
      selected: false,
      unread: false,
      preview: 'Hello Underwriting Team, Please review the attached commercial property submission and let us know whether this risk fits your appetite.',
      category: 'New submission',
      coverageType: 'Core',
      opportunity: 'OPP-48226',
      clearanceStatus: 'Pending clearance',
      attachmentLabel: 'ACORD',
      attachmentTitle: 'Commercial_Property_ACORD.pdf'
    },
    {
      id: 4,
      sender: 'Sarah Johnson',
      initials: 'SJ',
      subject: 'Updated Statement of Values',
      insuredName: 'Coral Ridge Towers Condominium Association',
      time: '09:45 AM',
      score: 89,
      appetite: 'In Appetite',
      missing: 0,
      selected: false,
      unread: false,
      preview: 'Hi team, Please find attached the revised Statement of Values for Coral Ridge Towers. Kindly use this updated version for your review.',
      category: 'Updated documents',
      coverageType: 'Core',
      opportunity: 'OPP-48224',
      clearanceStatus: 'Cleared',
      attachmentLabel: 'SOV',
      attachmentTitle: 'Updated_SOV_Coral_Ridge_Towers.xlsx'
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

  @Input() searchTerm = '';

get filteredEmails() {
  const search = this.searchTerm.trim().toLowerCase();

  if (!search) {
    return this.emails;
  }

  return this.emails.filter(email =>
    email.sender.toLowerCase().includes(search) ||
    email.subject.toLowerCase().includes(search) ||
    (email.insuredName ?? '').toLowerCase().includes(search)
  );
}

}
