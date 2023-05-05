import { TestBed } from '@angular/core/testing';

import { ListCacheManagerService } from './list-cache-manager.service';

describe('ListCacheManagerService', () => {
  let service: ListCacheManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCacheManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
