
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type ComposeMode = 'reply' | 'forward' | null;

@Component({
  selector: 'app-email-viewer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './email-viewer.component.html',
  styleUrl: './email-viewer.component.scss'
})
export class EmailViewerComponent {

  attachments = [
    { name: 'ACORD_125.pdf', type: 'PDF', size: '245 KB' },
    { name: 'ACORD_140.pdf', type: 'PDF', size: '182 KB' },
    { name: 'Property_SOV.xlsx', type: 'XLSX', size: '96 KB' }
  ];

  // Controls which compose template is displayed
  composeMode: ComposeMode = null;

  // Compose form fields
  fromEmail = 'john@xyz.ai';
  toEmail = '';
  ccEmail = '';
  bccEmail = '';
  emailSubject = '';
  emailMessage = '';

  showCc = false;
  showBcc = false;

  actionMessage = '';

  // Open Reply template
  openReply(): void {
    this.composeMode = 'reply';

    this.toEmail = 'kelly.ramos@amwins.com';
    this.ccEmail = '';
    this.bccEmail = '';
    this.emailSubject =
      'Re: Coral Ridge Towers - New Business Property Submission';

    this.emailMessage = '';
    this.showCc = false;
    this.showBcc = false;
    this.actionMessage = '';
  }

  // Open Forward template
  openForward(): void {
    this.composeMode = 'forward';

    this.toEmail = '';
    this.ccEmail = '';
    this.bccEmail = '';
    this.emailSubject =
      'Fw: Coral Ridge Towers - New Business Property Submission';

    this.emailMessage = '';
    this.showCc = false;
    this.showBcc = false;
    this.actionMessage = '';
  }

  // Close compose template and return to original email
  closeCompose(): void {
    this.composeMode = null;
    this.actionMessage = '';
  }

  // Show Cc field
  toggleCc(): void {
    this.showCc = !this.showCc;
  }

  // Show Bcc field
  toggleBcc(): void {
    this.showBcc = !this.showBcc;
  }

  // Demo action only: no actual email is sent
  sendEmail(): void {
    this.actionMessage =
      'Email sending is not connected yet. This is currently a UI demo.';
  }
}