import {Inject, Injectable} from '@angular/core';
import {CacheManager} from '../models/cache-manager';

class ListCacheManagerData<V> {
  data: V;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class ListCacheManagerService<V> extends CacheManager {

  private cache: ListCacheManagerData<V>[] = [];

  constructor(@Inject('ttlCacheInMilliseconds') protected override ttlCacheInMilliseconds: number) {
    super(ttlCacheInMilliseconds);
  }

  public getByIndex(index: number): V {
    this.deleteOutdated();
    if (this.indexExists(index)) {
      const cachedData = this.cache[index];

      return cachedData.data;
    }

    return null;
  }

  public delete(index: number): boolean {
    this.deleteOutdated();

    if (this.indexExists(index)) {
      this.cache.splice(index, 1);
      return true;
    }
    return false;
  }

  public addElement(value: V): void {
    const dataToAdd = new ListCacheManagerData<V>();
    dataToAdd.data = value;
    dataToAdd.timestamp = this.getCurrentTime();

    this.deleteOutdated();
    this.cache.push(dataToAdd);
  }

  public getAllElements(): V[] {
    this.deleteOutdated();

    return this.cache.map(c => c.data);
  }

  public getSize(): number {
    this.deleteOutdated();
    return this.cache.length;
  }

  public isEmpty(): boolean {
    return this.getSize() == 0;
  }

  private indexExists(index: number): boolean {
    return index >= 0 && index < this.cache.length;
  }

  private deleteOutdated(): void {
    this.cache = this.cache.filter(c => this.isValid(c.timestamp));
  }
}
