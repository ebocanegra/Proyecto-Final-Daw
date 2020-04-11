import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaPrincipianteComponent } from './rutina-principiante.component';

describe('RutinaPrincipianteComponent', () => {
  let component: RutinaPrincipianteComponent;
  let fixture: ComponentFixture<RutinaPrincipianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaPrincipianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaPrincipianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
