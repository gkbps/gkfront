// Internal
import { SecurityService } from './security.service';
import { TCodeService } from './tcode.service';

import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class TCodeGuard implements CanActivate, CanActivateChild {

    constructor(
      private router: Router,
      private gkSecurityService: SecurityService,
      private gkTcodeService: TCodeService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.getItem('currentUser')) {
            // check if userRights include tcode
            const urls = state.url.split('/');

            const tcode = urls[4];
            const tcodes = this.gkSecurityService.getMana();
            const check = this.gkTcodeService.checkTCodeInEncodeArray(tcode, tcodes);
            console.log(`User privilege to ${urls[4]} is: ${check}`);

            if (check) {
                return true;
            }
        }

        // tcode is not granted in so redirect to error page 500
        this.router.navigate(['/500']);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.getItem('currentUser')) {
            // check if userRights include tcode
            console.log(this.gkSecurityService.getMana());
            return true;
        }

        // tcode is not granted in so redirect to error page 500
        this.router.navigate(['/500']);
        return false;
    }
}
