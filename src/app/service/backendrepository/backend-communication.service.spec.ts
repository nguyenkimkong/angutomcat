import { TestBed, inject } from '@angular/core/testing';

import { BackendCommunicationService } from './backend-communication.service';

describe('BackendCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendCommunicationService]
    });
  });

  it('should be created', inject([BackendCommunicationService], (service: BackendCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
