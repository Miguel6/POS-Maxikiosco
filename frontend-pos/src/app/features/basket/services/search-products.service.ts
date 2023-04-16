import {Injectable} from '@angular/core';
import {Environment} from '../../../../environments/environment';
import {HttpService} from '../../../shared/services/http.service';
import {map, Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import {ProductSearch, ProductSearchAdapter} from '../models/product-search';
import {SearchProducts} from '../models/search-products';

@Injectable({
  providedIn: 'root'
})
export class SearchProductsService implements SearchProducts {

  private readonly BaseURL = Environment.searchProductsUrl;

  constructor(private httpService: HttpService,
              private productSearchAdapter: ProductSearchAdapter) {
  }

  public getByDescription(description: string): Observable<ProductSearch[]> {
    const httpParams = new HttpParams()
      .set('description', description);

    return this.httpService.doTypedGet<ProductSearch[]>(`${this.BaseURL}/getByDescription`, httpParams).pipe(map(result => result.map(r => this.productSearchAdapter.adapt(r))));
  }
}



