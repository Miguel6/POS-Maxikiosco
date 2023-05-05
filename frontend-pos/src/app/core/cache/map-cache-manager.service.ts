import {Inject, Injectable} from '@angular/core';
import {CacheManager} from '../models/cache-manager';

@Injectable({
  providedIn: 'any'
})
export class MapCacheManagerService<K, V> extends CacheManager {

  private cache = new Map<K, { data: V, timestamp: number }>();

  constructor(@Inject('ttlCacheInMilliseconds') protected override ttlCacheInMilliseconds: number) {
    super(ttlCacheInMilliseconds);
  }

  public getByKey(key: K): V {
    if (this.cache.has(key)) {
      const cachedData = this.cache.get(key);
      if (this.isValid(cachedData.timestamp)) {
        return cachedData.data;
      } else {
        this.delete(key);
      }
    }

    return null;
  }

  public addElement(key: K, value: V): void {
    if (key) {
      this.cache.set(key, {data: value, timestamp: this.getCurrentTime()})
    }
  }


  public delete(key: K): boolean {
    if (this.cache.has(key)) {
      return this.cache.delete(key);
    }
    return false;
  }
}
