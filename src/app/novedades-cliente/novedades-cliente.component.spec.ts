import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesClienteComponent } from './novedades-cliente.component';

describe('NovedadesClienteComponent', () => {
  let component: NovedadesClienteComponent;
  let fixture: ComponentFixture<NovedadesClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovedadesClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovedadesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
