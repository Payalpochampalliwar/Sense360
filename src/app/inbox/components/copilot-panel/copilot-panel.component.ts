
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-copilot-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './copilot-panel.component.html',
  styleUrl: './copilot-panel.component.scss'
})
export class CopilotPanelComponent {

  extractedDetails = [
    { label: 'Insured', value: 'Coral Ridge Towers Condominium Association' },
    { label: 'Location', value: 'Fort Lauderdale, FL' },
    { label: 'Occupancy', value: 'Condominium' },
    { label: 'Construction', value: 'Fire Resistive' },
    { label: 'Total Insured Value', value: '$48,600,000' },
    { label: 'Year Built', value: '2018' }
  ];

  missingInformation = [
    'Five years of loss runs',
    'Updated building valuation'
  ];

  riskSummary =
    'Two-building fire-resistant condominium high-rise located in Fort Lauderdale. The submission appears to align with the property appetite, subject to review of missing documents.';

  actionMessage = '';

  handleAction(action: string): void {
    this.actionMessage = `${action} action selected. Integration will be added in the next phase.`;
  }

}
