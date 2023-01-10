import {Component} from '@angular/core';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {BreadcrumbEntryConfig, CustomRouteData} from '../../../app-routing.module';
import {PathName} from '../../models/path-name';
import {NavigatorHelper} from '../../providers/navigator-helper';
import {Path} from '../../constants/path';

@Component({
  selector: 'pos-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  public activePathName: string;
  public breadcrumbs: PathName[];

  constructor(private breadcrumbService: BreadcrumbService,
              private navigatorHelper: NavigatorHelper) {
    this.breadcrumbService.getObservable().subscribe(data => {
      this.activePathName = this.getActivePath(data);
      this.breadcrumbs = this.mapBreadcrumbs(data.breadcrumb ?? []);
    })
  }

  private mapBreadcrumbs(breadcrumbs: BreadcrumbEntryConfig[]): PathName[] {
    return breadcrumbs.map(breadcrumb => {
      return <PathName>{
        path: breadcrumb.path,
        name: breadcrumb.titleTranslationKey
      }
    })
  }

  private getActivePath(data: CustomRouteData): string {
    return data.titleTranslationKey;
  }

  public clickOnRoute(path: Path) {
    this.navigatorHelper.goTo(path);
  }
}
