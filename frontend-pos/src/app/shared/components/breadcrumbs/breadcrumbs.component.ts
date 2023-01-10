import {Component} from '@angular/core';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {BreadcrumbEntryConfig, CustomRouteData} from '../../../app-routing.module';
import {PathName} from '../../models/path-name';

@Component({
  selector: 'pos-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  public activePath: PathName;
  public breadcrumbs: PathName[];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.getObservable().subscribe(data => {
      this.activePath = this.getActivePath(data);
      this.breadcrumbs = this.mapBreadcrumbs(data.breadcrumb?? []);
    })
  }

  private mapBreadcrumbs(breadcrumbs: BreadcrumbEntryConfig[]): PathName[]{
    return breadcrumbs.map(breadcrumb => {
      return <PathName>{
        path: breadcrumb.path,
        name: breadcrumb.titleTranslationKey
      }
    })
  }

  private getActivePath(data: CustomRouteData): PathName {
    return <PathName>{
      path: data.path,
      name: data.titleTranslationKey
    }
  }

  public clickOnRoute(route: string) {
    console.log(route);
  }
}
