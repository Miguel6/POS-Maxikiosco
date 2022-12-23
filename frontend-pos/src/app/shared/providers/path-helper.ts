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
    return this.getCurrentLocation() === `/${Path.Home}`;
  }

  public isInBasket(): boolean {
    return this.getCurrentLocation() === `/${Path.Basket}`;
  }

  public isInProviders(): boolean {
    return this.getCurrentLocation() === `/${Path.Providers}`;
  }

  public isInProducts(): boolean {
    return this.getCurrentLocation() === `/${Path.Products}`;
  }

  public isInSettings(): boolean {
    return this.getCurrentLocation() === `/${Path.Settings}`;
  }

  public isInStatistics(): boolean {
    return this.getCurrentLocation() === `/${Path.Statistics}`;
  }

  public isInUsers(): boolean {
    return this.getCurrentLocation() === `/${Path.Users}`;
  }
}
