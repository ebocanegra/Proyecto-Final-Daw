import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoresAdminComponent } from './monitores-admin.component';

describe('MonitoresAdminComponent', () => {
  let component: MonitoresAdminComponent;
  let fixture: ComponentFixture<MonitoresAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoresAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
