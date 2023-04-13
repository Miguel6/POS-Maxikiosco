import {Injectable} from '@angular/core';
import {Environment} from '../../../../environments/environment';
import {HttpService} from '../../../shared/services/http.service';
import {Observable, of, tap} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import {ProductSearch} from '../models/product-search';

@Injectable({
  providedIn: 'root'
})
export class SearchProductsService {

  private readonly BaseURL = Environment.searchProductsUrl;
  // public opts: ProductSearch[] = [];
  public opts: ProductSearch[] = this.mock();

  constructor(private httpService: HttpService) {
  }

  public getByDescription(description: string): Observable<ProductSearch[]> {
    const httpParams = new HttpParams()
      .set('description', description);

    return this.opts.length ?
      of(this.opts) :
      this.httpService.doTypedGet<ProductSearch[]>(`${this.BaseURL}/getByDescription`, httpParams)
        .pipe(tap(data => this.opts = data));
  }

  public mock(): ProductSearch[] {
    const productOne = new ProductSearch();
    productOne.id = 1;
    productOne.price = 123;
    productOne.barcode = '';
    productOne.description = 'product 1';

    return [productOne]
  }
}



