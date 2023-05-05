import {Injectable} from '@angular/core';
import {Observable, of, tap} from 'rxjs';
import {ProductSearch} from '../basket/models/product-search';
import {MapCacheManagerService} from '../../core/cache/map-cache-manager.service';
import {ISearchProductsService, SearchProductsService} from '../basket/services/search-products.service';

@Injectable({
  providedIn: 'root'

})
export class SearchProductProxyService implements ISearchProductsService {

  constructor(private cacheManagerService: MapCacheManagerService<string, ProductSearch[]>,
              private searchProductsService: SearchProductsService) {
  }

  public getByDescription(description: string): Observable<ProductSearch[]> {
    if (!description) {
      description = '';
    }
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
