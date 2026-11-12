import { Component } from '@angular/core';
import { EmailListComponent } from './components/email-list/email-list.component';
import { EmailViewerComponent } from './components/email-viewer/email-viewer.component';
import { CopilotPanelComponent } from './components/copilot-panel/copilot-panel.component';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [
    EmailListComponent,
    EmailViewerComponent,
    CopilotPanelComponent
  ],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent {

}
