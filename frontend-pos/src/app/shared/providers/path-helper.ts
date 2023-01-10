import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Path} from '../constants/path';

@Injectable()
export class PathHelper {
  constructor(private router: Router) {
  }

  public getCurrentLocation(): string {
    return this.router.url;
  }

  public isInHome(): boolean {
    return this.isIn(Path.Home);
  }

  public isInBasket(): boolean {
    return this.isIn(Path.Basket);
  }

  public isInProviders(): boolean {
    return this.isIn(Path.Providers);
  }

  public isInProducts(): boolean {
    return this.isIn(Path.Products);
  }

  public isInSettings(): boolean {
    return this.isIn(Path.Settings);
  }

  public isInStatistics(): boolean {
    return this.isIn(Path.Statistics);
  }

  public isInUsers(): boolean {
    return this.isIn(Path.Users);
  }

  public isIn(path: string): boolean {
    return this.getCurrentLocation().split('/')[1] === path;
  }
}
