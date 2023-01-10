import {Injectable} from '@angular/core';
import {CustomRouteData} from '../../app-routing.module';
import {filter, map, mergeMap, Observable, Subject} from 'rxjs';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private subject: Subject<CustomRouteData>;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.subject = new Subject<CustomRouteData>();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.rootRoute(this.route)),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
      mergeMap((route: ActivatedRoute) => route.data)
    ).subscribe((event: { [name: string]: any }) => {
      this.subject.next(event as CustomRouteData);
    });
  }

  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }

    return route;
  }

  public getObservable(): Observable<CustomRouteData> {
    return this.subject.asObservable();
  }
}
