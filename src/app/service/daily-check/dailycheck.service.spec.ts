import { TestBed } from '@angular/core/testing';

import { DailycheckService } from './dailycheck.service';

describe('DailycheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailycheckService = TestBed.get(DailycheckService);
    expect(service).toBeTruthy();
  });
});
