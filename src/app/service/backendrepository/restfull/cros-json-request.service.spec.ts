import { TestBed, inject } from '@angular/core/testing';

import { CrosJsonRequestService } from './cros-json-request.service';

describe('CrosJsonRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrosJsonRequestService]
    });
  });

  it('should be created', inject([CrosJsonRequestService], (service: CrosJsonRequestService) => {
    expect(service).toBeTruthy();
  }));
});
