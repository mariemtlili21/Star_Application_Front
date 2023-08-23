import { TestBed } from '@angular/core/testing';

import { SimpleUserServiceService } from './simple-user-service.service';

describe('SimpleUserServiceService', () => {
  let service: SimpleUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
