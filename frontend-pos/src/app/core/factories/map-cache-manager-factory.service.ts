import {Inject, Injectable} from '@angular/core';
import {MapCacheManagerService} from '../cache/map-cache-manager.service';
import {FactoryService} from '../models/factory-service';

@Injectable({
  providedIn: 'root'
})
export class MapCacheManagerFactoryService<K, V> implements FactoryService<MapCacheManagerService<K, V>> {

  constructor(@Inject('ttlCacheInMilliseconds') private ttlCacheInMilliseconds: number) {
  }

  public createInstance(): MapCacheManagerService<K, V> {
    return new MapCacheManagerService(this.ttlCacheInMilliseconds);
  }
}
