import {TestBed} from '@angular/core/testing';

import {MapCacheManagerFactoryService} from './map-cache-manager-factory.service';

describe('MapCacheManagerFactoryService', () => {
  let service: MapCacheManagerFactoryService<any, any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapCacheManagerFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
