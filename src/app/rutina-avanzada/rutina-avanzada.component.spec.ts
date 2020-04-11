import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaAvanzadaComponent } from './rutina-avanzada.component';

describe('RutinaAvanzadaComponent', () => {
  let component: RutinaAvanzadaComponent;
  let fixture: ComponentFixture<RutinaAvanzadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaAvanzadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
