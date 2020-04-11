import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasClienteComponent } from './rutinas-cliente.component';

describe('RutinasClienteComponent', () => {
  let component: RutinasClienteComponent;
  let fixture: ComponentFixture<RutinasClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinasClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
