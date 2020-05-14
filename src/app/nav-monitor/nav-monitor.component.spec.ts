import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMonitorComponent } from './nav-monitor.component';

describe('NavMonitorComponent', () => {
  let component: NavMonitorComponent;
  let fixture: ComponentFixture<NavMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
