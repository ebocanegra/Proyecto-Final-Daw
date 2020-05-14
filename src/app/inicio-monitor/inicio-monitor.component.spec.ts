import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMonitorComponent } from './inicio-monitor.component';

describe('InicioMonitorComponent', () => {
  let component: InicioMonitorComponent;
  let fixture: ComponentFixture<InicioMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
