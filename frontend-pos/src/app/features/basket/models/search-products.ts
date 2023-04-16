import {Observable} from 'rxjs';
import {ProductSearch} from './product-search';

export interface SearchProducts {
  getByDescription(description: string): Observable<ProductSearch[]>;
}
