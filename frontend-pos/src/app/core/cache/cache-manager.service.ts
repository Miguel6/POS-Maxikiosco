import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class CacheManagerService<K, V> {

  private cache = new Map<K, { data: V, timestamp: number }>();

  constructor(@Inject('ttlCacheInMilliseconds') private ttlCacheInMilliseconds: number) {
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

  public getTTL(): void {
    console.log(this.ttlCacheInMilliseconds);
  }

  private getCurrentTime(): number {
    return new Date().getTime();
  }

  public delete(key: K): boolean {
    if (this.cache.has(key)) {
      return this.cache.delete(key);
    }
    return false;
  }

  private isValid(timestamp: number): boolean {
    const currentTime = this.getCurrentTime();

    if (this.ttlCacheInMilliseconds == undefined) {
      return true;
    }
    return currentTime - timestamp < this.ttlCacheInMilliseconds;
  }
}
