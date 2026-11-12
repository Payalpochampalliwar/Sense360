
import { Component } from '@angular/core';

@Component({
  selector: 'app-email-viewer',
  standalone: true,
  templateUrl: './email-viewer.component.html',
  styleUrl: './email-viewer.component.scss'
})
export class EmailViewerComponent {

  attachments = [
    { name: 'ACORD_125.pdf', type: 'PDF', size: '245 KB' },
    { name: 'ACORD_140.pdf', type: 'PDF', size: '182 KB' },
    { name: 'Property_SOV.xlsx', type: 'XLSX', size: '96 KB' }
  ];

}
