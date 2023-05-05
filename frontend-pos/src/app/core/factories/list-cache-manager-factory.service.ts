import {Inject, Injectable} from '@angular/core';
import {FactoryService} from '../models/factory-service';
import {ListCacheManagerService} from '../cache/list-cache-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ListCacheManagerFactoryService<V> implements FactoryService<ListCacheManagerService<V>> {

  constructor(@Inject('ttlCacheInMilliseconds') private ttlCacheInMilliseconds: number) {
  }

  public createInstance(): ListCacheManagerService<V> {
    return new ListCacheManagerService(this.ttlCacheInMilliseconds);
  }
}
