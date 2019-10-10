import { TestBed } from '@angular/core/testing';

import { PersoService } from './perso.service';

describe('PersoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersoService = TestBed.get(PersoService);
    expect(service).toBeTruthy();
  });
});
