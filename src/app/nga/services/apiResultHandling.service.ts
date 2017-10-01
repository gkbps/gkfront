import { Injectable } from '@angular/core';

@Injectable()
export class APIResultHandlingService {

  constructor() { }

  processAPIResult(result) {    
    let severity = '';
    let summary = '';
    let detail = '';
    let trackError = false;

    switch (result.status) {
      case 200: // OK: GET, POST, PUT, PATCH, DELETE
        severity = 'info';
        summary = '200 OK';
        detail = 'Action completed!';
        break;

      case 201: // CREATE: POST
        severity = 'info';
        summary = '201 Created';
        detail = 'Creation completed!';
        break;

      case 304: // NOT MODIFIED: for Caching and for PATCH
        severity = 'warn';
        summary = '304 Not modified';
        detail = 'No change is made!';
        break;

      case 400: // BAD REQUEST: Invalid syntax
        severity = 'warn';
        summary = '400 Bad Request';
        detail = 'Invalid Syntax!';
        trackError = true;
        break;

      case 401: // UNAUTHORIZED due to unauthenticated user
        severity = 'error';
        summary = '401 Unauthorized';
        detail = 'User is not authorized!';
        trackError = true;
        break;

      case 403: // FORBIDDEN as authenticated user does not have proper right
        severity = 'error';
        summary = '403 Forbidden';
        detail = 'User has no privilege for request!';
        trackError = true;
        break;

      case 404: // NOT FOUND
        severity = 'warn';
        summary = '404 Not Found';
        detail = 'Resource is not found!';
        trackError = true;
        break;

      case 412: // RE-CONDITION FAILED due to Validation
        severity = 'warn';
        summary = '412 Precondition Failed';
        detail = 'Validation process failed!';
        trackError = true;
        break;

      case 500: // INTERNAL SERVER ERROR
        severity = 'error';
        summary = '500 Internal Server Error';
        detail = 'Internal Servcer Error!';
        trackError = true;
        break;

      default:
        break;
    }

    if (trackError) {
      this.trackError({
        url: result.url,
        status: result.status,
        detail: result['_body'],
      });
    }

    console.log(severity, summary, detail);

    return {
      severity: severity,
      summary: summary,
      detail: detail,
    }

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
