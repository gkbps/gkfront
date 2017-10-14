import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class APIResultHandlingService {

  constructor(
    private translate: TranslateService,
  ) { }

  public processAPIResult(result) {

    return new Promise(
      (resolve, reject) => {

        const key1: string = result.status.toString();
        const key2: string = result.status.toString() + 'Msg';

        this.translate.get([key1, key2])
          .subscribe((res) => {
            console.log(res);

            let severity = '';
            let trackError = false;

            switch (result.status) {
              case 200: // OK: GET, POST, PUT, PATCH, DELETE
              case 201: // CREATE: POST
                severity = 'info';
                break;

              case 304: // NOT MODIFIED: for Caching and for PATCH
                severity = 'warn';
                break;

              case 400: // BAD REQUEST: Invalid syntax
                severity = 'warn';
                trackError = true;
                break;

              case 401: // UNAUTHORIZED due to unauthenticated user
              case 403: // FORBIDDEN as authenticated user does not have proper right
                severity = 'error';
                trackError = true;
                break;

              case 404: // NOT FOUND
              case 412: // RE-CONDITION FAILED due to Validation
                severity = 'warn';
                trackError = true;
                break;

              case 500: // INTERNAL SERVER ERROR
                severity = 'error';
                trackError = true;
                break;

              default:
                reject(Error("Invalid Http Return"));
                break;
            }

            if (trackError) {
              this.trackError({
                url: result.url,
                status: result.status,
                detail: result['_body'],
              });
            }

            resolve({
              severity: severity,
              summary: res[key1],
              detail: res[key2],
            });

          });
      }
    );
  }

  trackError(error): void {
    if (localStorage.getItem('errorHistory') === null) {
      localStorage.setItem('errorHistory', '[]');
    }
    const errorHistory: any[] = JSON.parse(localStorage.getItem('errorHistory'));
    while (errorHistory.length >= 10 ) {
      errorHistory.shift();
    }
    errorHistory.push(error);
    localStorage.setItem('errorHistory', JSON.stringify(errorHistory));
  }

}
