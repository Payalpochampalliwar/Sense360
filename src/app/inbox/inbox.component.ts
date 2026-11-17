
import { Component } from '@angular/core';

import { EmailListComponent } from './components/email-list/email-list.component';
import { EmailViewerComponent } from './components/email-viewer/email-viewer.component';
import { CopilotPanelComponent } from './components/copilot-panel/copilot-panel.component';
import { InboxToolbarComponent } from './components/inbox-toolbar/inbox-toolbar.component';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [
    EmailListComponent,
    EmailViewerComponent,
    CopilotPanelComponent,
    InboxToolbarComponent
  ],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent {

  searchTerm = '';

  onSearchChange(value: string): void {
    this.searchTerm = value;
  }

}
