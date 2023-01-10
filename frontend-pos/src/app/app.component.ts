import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs';
import {BreadcrumbService} from './shared/services/breadcrumb.service';
import {CustomRouteData} from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  langs: any = {'en': 'English', 'es': 'Spanish'};
  currentLang: string = 'es';

  constructor(
    public translateService: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService) {

    this.translateService.addLangs(Object.keys(this.langs));
    this.translateService.setDefaultLang('es');
  }


  ngOnInit(): void {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   map(() => this.rootRoute(this.route)),
    //   filter((route: ActivatedRoute) => route.outlet === 'primary'),
    //   mergeMap((route: ActivatedRoute) => route.data)
    // ).subscribe((event: { [name: string]: any }) => {
    //   this.breadcrumbService.setData(event as CustomRouteData);
    // });
  }

  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
