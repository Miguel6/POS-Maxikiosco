import {Inject, Injectable} from '@angular/core';
import {CacheManagerService} from '../cache/cache-manager.service';
import {FactoryService} from '../models/factory-service';

@Injectable({
  providedIn: 'root'
})
export class CacheManagerFactoryService<K, V> implements FactoryService<CacheManagerService<K, V>> {

  constructor(@Inject('ttlCacheInMilliseconds') private ttlCacheInMilliseconds: number) {
  }

  public createInstance(): CacheManagerService<K, V> {
    return new CacheManagerService(this.ttlCacheInMilliseconds);
  }
}
