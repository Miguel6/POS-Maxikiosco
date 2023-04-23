import { TestBed } from '@angular/core/testing';

import { SearchProductProxyService } from './search-product-proxy.service';

describe('SearchProductProxyService', () => {
  let service: SearchProductProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchProductProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
