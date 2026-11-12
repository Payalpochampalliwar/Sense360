import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopilotPanelComponent } from './copilot-panel.component';

describe('CopilotPanelComponent', () => {
  let component: CopilotPanelComponent;
  let fixture: ComponentFixture<CopilotPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopilotPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopilotPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
