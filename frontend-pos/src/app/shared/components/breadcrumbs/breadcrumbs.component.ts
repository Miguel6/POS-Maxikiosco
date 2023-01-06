import {Component} from '@angular/core';
import {ResolveStart, Router} from '@angular/router';
import {BreadcrumbTranslator} from '../../translator/pos-breadcrumb-translator';

@Component({
  selector: 'pos-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  public activePath: string;
  public breadcrumbs: string[];
  private fullPath: string;

  constructor(private router: Router,
              private breadcrumbTranslator: BreadcrumbTranslator) {
    router.events.subscribe((event) => {
      if (event instanceof ResolveStart) {
        this.fullPath = this.removeFirstSlash(event.url);
        this.activePath = this.getActivePath();
        this.breadcrumbs = this.getBreadcrumbs();
      }
    });
  }

  public clickOnRoute(route: string) {
    console.log(route);
  }

  private removeFirstSlash(route: string) {
    return route?.slice(1, route.length);
  }

  //TODO: Mejorar usando un regex
  private getActivePath(): string {
    const urls = this.fullPath.split('/');

    return urls[urls.length - 1];
  }

  //TODO: Mejorar usando un regex
  private getBreadcrumbs(): string[] {
    const urls = this.fullPath.split('/');
    urls.pop();

    return urls;
  }
}
