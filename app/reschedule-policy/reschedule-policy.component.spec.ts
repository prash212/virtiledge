import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReschedulePolicyComponent } from './reschedule-policy.component';

describe('ReschedulePolicyComponent', () => {
  let component: ReschedulePolicyComponent;
  let fixture: ComponentFixture<ReschedulePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReschedulePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReschedulePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
