import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Path} from '../constants/path';

@Injectable()
export class NavigatorHelper {

  constructor(private router: Router) {
  }

  public goTo(path: Path): void {
    this.router.navigate([path]);
  }

  public goToHome(): void {
    this.goTo(Path.Home);
  }

  public goToBasket(): void {
    this.goTo(Path.Basket);
  }

  public goToProviders(): void {
    this.goTo(Path.Providers);
  }

  public goToProducts(): void {
    this.goTo(Path.Products);
  }

  public goToSettings(): void {
    this.goTo(Path.Settings);
  }

  public goToStatistics(): void {
    this.goTo(Path.Statistics);
  }

  public goToUsers(): void {
    this.goTo(Path.Users);
  }
}
