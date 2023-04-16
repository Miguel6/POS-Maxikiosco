import {Injectable} from '@angular/core';
import {Environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CacheManagerService<K, V> {

  private cache = new Map<K, { data: V, timestamp: number }>();

  constructor() {
  }

  public getByKey(key: K): V {
    if (this.cache.has(key)) {
      const cachedData = this.cache.get(key);
      if (this.isValid(cachedData.timestamp)) {
        return cachedData.data;
      } else {
        this.cache.delete(key);
      }
    }

    return null;
  }

  public addElement(key: K, value: V): void {
    this.cache.set(key, {data: value, timestamp: this.getCurrentTime()})
  }

  private getCurrentTime(): number {
    return new Date().getTime();
  }

  private isValid(timestamp: number): boolean {
    const currentTime = this.getCurrentTime();

    return currentTime - timestamp < Environment.ttlCacheInMilliseconds
  }

}
