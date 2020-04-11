import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesAdminComponent } from './actividades-admin.component';

describe('ActividadesAdminComponent', () => {
  let component: ActividadesAdminComponent;
  let fixture: ComponentFixture<ActividadesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
