import {TestBed} from '@angular/core/testing';

import {MapCacheManagerService} from './map-cache-manager.service';

describe('MapCacheManagerService', () => {
  let service: MapCacheManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapCacheManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
