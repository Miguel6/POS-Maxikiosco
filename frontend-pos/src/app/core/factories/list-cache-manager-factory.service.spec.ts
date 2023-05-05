import { TestBed } from '@angular/core/testing';

import { ListCacheManagerFactoryService } from './list-cache-manager-factory.service';

describe('ListCacheManagerFactoryService', () => {
  let service: ListCacheManagerFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCacheManagerFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
