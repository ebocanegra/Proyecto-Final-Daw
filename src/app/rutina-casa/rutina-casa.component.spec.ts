import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaCasaComponent } from './rutina-casa.component';

describe('RutinaCasaComponent', () => {
  let component: RutinaCasaComponent;
  let fixture: ComponentFixture<RutinaCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
