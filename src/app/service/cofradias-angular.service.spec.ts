import { TestBed } from '@angular/core/testing';

import { CofradiasAngularService } from './cofradias-angular.service';

describe('CofradiasAngularService', () => {
  let service: CofradiasAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CofradiasAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
