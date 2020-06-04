import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesMonitorComponent } from './novedades-monitor.component';

describe('NovedadesMonitorComponent', () => {
  let component: NovedadesMonitorComponent;
  let fixture: ComponentFixture<NovedadesMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovedadesMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovedadesMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
