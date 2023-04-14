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

  constructor(private httpService: HttpService) {
  }

  // Todo: Add a ProxyPattern as a cache to avoid calling the backend constantly
  public getByDescription(description: string): Observable<ProductSearch[]> {
    const httpParams = new HttpParams()
      .set('description', description);

    return this.httpService.doTypedGet<ProductSearch[]>(`${this.BaseURL}/getByDescription`, httpParams);
  }
}



