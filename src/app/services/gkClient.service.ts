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

    findMasterListPagination(filter: string, sort: any, first: number, rows: number) {
        const pagination = {
            filter: filter,
            sort: sort,
            first: first,
            rows: rows
        };
        // console.log(pagination);

        let reqOptions = this.securityService.jwt().merge({params: pagination});
        //console.log(reqOptions);

        return this.http.get(
            this.config.apiUrl + this.prefix + '/masterListPagination',
            reqOptions,
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
            gkclient,
            this.securityService.jwt(),
          );
    }

    update(gkclient: any) {
        return this.http.put(
            this.config.apiUrl + this.prefix + gkclient._id,
            gkclient,
            this.securityService.jwt(),
          );
    }

    disable(_id: string) {
        return this.http.patch(
            this.config.apiUrl + this.prefix + 'disable/' + _id,
            {},
            this.securityService.jwt(),
          );
    }

    enable(_id: string) {
        return this.http.patch(
            this.config.apiUrl + this.prefix + 'enable/' + _id,
            {},
            this.securityService.jwt(),
          );
    }

    mark(_id: string) {
        return this.http.patch(
            this.config.apiUrl + this.prefix + 'mark/' + _id,
            {},
            this.securityService.jwt(),
          );
    }

    unmark(_id: string) {
        return this.http.patch(
            this.config.apiUrl + this.prefix + 'unmark/' + _id,
            {},
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
