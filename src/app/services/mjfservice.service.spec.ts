import { TestBed } from '@angular/core/testing';

import { MjfserviceService } from './mjfservice.service';

describe('MjfserviceService', () => {
  let service: MjfserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MjfserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
