import { TestBed, inject } from '@angular/core/testing';

import { FootballScheduleService } from './football-schedule.service';

describe('FootballScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballScheduleService]
    });
  });

  it('should be created', inject([FootballScheduleService], (service: FootballScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
