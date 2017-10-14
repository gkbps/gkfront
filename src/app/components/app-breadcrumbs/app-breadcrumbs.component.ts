import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

import { NavigationService } from '../../nga/services';

@Component({
  selector: 'app-breadcrumbs',
  template: `
  <ol class="breadcrumb"  style="font-size: 0.85em;">
    <button class="btn btn-outline-primary btn-sm" type="button" (click)="returnPrevious()"><i class="icon-arrow-left-circle"></i> {{'returnPrevious'|translate}}</button>
    <div class="pull-right">
      <ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs" let-last = last>
        <li class="breadcrumb-item"
            *ngIf="breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'||breadcrumb.label.title&&last"
            [ngClass]="{active: last}">
          <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
          <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>
        </li>
      </ng-template>
    </div>
  </ol>`
})
export class AppBreadcrumbs {
  breadcrumbs: Array<Object>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
  ) {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event) => {
      this.breadcrumbs = [];
      let currentRoute = this.route.root,
      url = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach(route => {
          if (route.outlet === 'primary') {
            const routeSnapshot = route.snapshot;
            url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
            this.breadcrumbs.push({
              label: route.snapshot.data,
              url:   url
            });
            currentRoute = route;
          }
        });
      } while (currentRoute);
    });
  }

  returnPrevious() {
    this.navigationService.returnPrevious();
  }
}
