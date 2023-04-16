import {Injectable} from '@angular/core';
import {SearchProducts} from '../basket/models/search-products';
import {Observable, of, tap} from 'rxjs';
import {ProductSearch} from '../basket/models/product-search';
import {CacheManagerService} from '../../shared/cache/cache-manager.service';
import {SearchProductsService} from '../basket/services/search-products.service';

@Injectable({
  providedIn: 'root'
})
export class SearchProductProxyService implements SearchProducts {

  constructor(private cacheManagerService: CacheManagerService<string, ProductSearch[]>,
              private searchProductsService: SearchProductsService) {
  }

  public getByDescription(description: string): Observable<ProductSearch[]> {
    let recoveredFromCache = this.cacheManagerService.getByKey(description);
    if (recoveredFromCache) {
      return of(recoveredFromCache);
    }
    recoveredFromCache = this.cacheManagerService.getByKey('');

    if (recoveredFromCache) {
      return of(recoveredFromCache.filter(e => e.getTextToFilter().includes(description)));
    }

    try {
      return this.searchProductsService.getByDescription(description).pipe(
        tap(response => {
          this.cacheManagerService.addElement(description, response);
        })
      );
    } catch (e) {
      throw e;
    }
  }
}
