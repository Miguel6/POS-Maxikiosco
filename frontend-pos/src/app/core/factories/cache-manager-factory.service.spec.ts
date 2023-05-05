import {TestBed} from '@angular/core/testing';

import {CacheManagerFactoryService} from './cache-manager-factory.service';

describe('CacheManagerFactoryService', () => {
  let service: CacheManagerFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheManagerFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
