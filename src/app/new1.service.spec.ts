import { TestBed } from '@angular/core/testing';

import { New1Service } from './new1.service';

describe('New1Service', () => {
  let service: New1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(New1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
