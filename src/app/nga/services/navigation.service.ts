import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

  constructor(
    private router: Router,
  ) { }

  /*****************************************************************************
   * HISTORY
   * trackHistory:        To track the last (20) user visits to support backward
   * canReturn:           To confirm if return is possble
   * returnPrevious:      To perform backward
   *****************************************************************************/
  trackHistory(): void {
    if (localStorage.getItem('history') === null) {
      localStorage.setItem('history', '[]');
    }

    const history: any[] = JSON.parse(localStorage.getItem('history'));

    while (history.length >= 10 ) {
      history.shift();
    }

    const currentUrl = this.router.url; /// this will give you current url
    if (currentUrl != history[history.length - 1]) {
      history.push(currentUrl);
    }

    localStorage.setItem('history', JSON.stringify(history));
    // console.log(history);
  }

  canReturn(): boolean {
    const history: any[] = JSON.parse(localStorage.getItem('history'));
    return (history.length > 1);
  }

  returnPrevious(): void {
    let history: any[] = JSON.parse(localStorage.getItem('history'));
    if (history.length > 1) {
      history.pop();
      // console.log(history);
      const returnUrl: string = history[(history.length - 1)];
      history.pop();
      localStorage.setItem('history', JSON.stringify(history));
      // console.log(returnUrl);
      this.router.navigate([returnUrl]);
    }
  }

  goto400() {
    this.router.navigate(['/#/400']);
  }

  goto404() {
    this.router.navigate(['/#/404']);
  }

  goto500() {
    this.router.navigate(['/#/500']);
  }
}
