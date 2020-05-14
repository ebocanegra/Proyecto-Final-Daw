import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesMonitorComponent } from './actividades-monitor.component';

describe('ActividadesMonitorComponent', () => {
  let component: ActividadesMonitorComponent;
  let fixture: ComponentFixture<ActividadesMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
