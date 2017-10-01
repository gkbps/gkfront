import { AppConfig } from '../app.config';
import { SecurityService } from '../nga/services';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class GkClientService {

    prefix: string = '/gkclients/';

    constructor(
      private http: Http,
      private config: AppConfig,
      private securityService: SecurityService,
    ) { }

    findAll() {
        return this.http.get(
            this.config.apiUrl + this.prefix,
            this.securityService.jwt(),
          )
        .map((response: Response) => response.json());
    }

    findMasterList() {
        return this.http.get(
            this.config.apiUrl + this.prefix + '/masterList',
            this.securityService.jwt(),
          )
        .map((response: Response) => response.json());
    }

    findById(_id: string) {
        return this.http.get(
            this.config.apiUrl + this.prefix + _id,
            this.securityService.jwt(),
          )
        .map((response: Response) => response.json());
    }

    create(gkclient: any) {
        return this.http.post(
            this.config.apiUrl + this.prefix,
            gkclient);
    }

    update(gkclient: any) {
        return this.http.put(
            this.config.apiUrl + this.prefix + gkclient._id,
            gkclient,
            this.securityService.jwt(),
          );
    }

    delete(_id: string) {
        return this.http.delete(
            this.config.apiUrl + this.prefix + _id,
            this.securityService.jwt(),
          );
    }

}
