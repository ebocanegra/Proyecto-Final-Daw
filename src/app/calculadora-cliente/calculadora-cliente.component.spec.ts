import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraClienteComponent } from './calculadora-cliente.component';

describe('CalculadoraClienteComponent', () => {
  let component: CalculadoraClienteComponent;
  let fixture: ComponentFixture<CalculadoraClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
