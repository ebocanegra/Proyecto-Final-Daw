import { TestBed } from '@angular/core/testing';

import { MonitoresService } from './monitores.service';

describe('MonitoresService', () => {
  let service: MonitoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
