export abstract class CacheManager {
  protected constructor(protected ttlCacheInMilliseconds: number) {
  }

  protected getCurrentTime(): number {
    return new Date().getTime();
  }

  protected isValid(timestamp: number): boolean {
    const currentTime = this.getCurrentTime();

    if (this.ttlCacheInMilliseconds == undefined) {
      return true;
    }
    return currentTime - timestamp < this.ttlCacheInMilliseconds;
  }
}
