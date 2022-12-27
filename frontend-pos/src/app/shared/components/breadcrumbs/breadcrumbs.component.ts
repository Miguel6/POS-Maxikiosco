import {Component} from '@angular/core';
import {PathHelper} from '../../providers/path-helper';
import {ResolveStart, Router} from '@angular/router';

@Component({
  selector: 'pos-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  public activePath: string;
  public breadcrumb: string;
  private fullPath: string;


  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof ResolveStart) {
        this.fullPath = event.url.slice(1, event.url.length);
        this.activePath = this.getActivePath();
        this.breadcrumb = this.getBreadcrumbs();
      }
    });
  }

  //TODO: Mejorar usando un regex
  private getActivePath(): string {
    const urls = this.fullPath.split('/');

    return urls[urls.length - 1];
  }

  //TODO: Mejorar usando un regex
  private getBreadcrumbs(): string {
    const urls = this.fullPath.split('/');
    urls.pop();

    return urls.join('/');
  }
}
