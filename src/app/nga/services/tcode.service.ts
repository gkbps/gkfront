import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

// declare const Buffer;

@Injectable()
export class TcodeService {

  constructor(
    private router: Router,
    private http: Http,
  ) { }

  /*****************************************************************************
   * TO PROCESS APPLICATION TCODE OR TRANSFORM A TCODE TO BE ACTIONABLE URL
   * tcode = prefixAction = moduleXX
   *
   * Example
   * - extractPrefix(mjeXX)-> mje
   * - extractAction(mjeXX)-> XX
   * - urlLead(mjeXX)      -> /mje/mjeXX
   * - urlForm(mjeXX, id)  -> /mje/mjeXX/123
   * - urlHome(mjeXX)      -> /mje
   *****************************************************************************/
  private url: string = '/';        // Home of application Tcode

  // Extract prefix from tcode
  extractPrefix(tcode: string): string {
    return tcode.substring(0, (tcode.length - 2)).toLowerCase();
  }

  // Extract action from tcode
  extractAction(tcode: string): string {
    return tcode.substring(tcode.length - 2).toLowerCase();
  }

  // editable
  formEditable(tcode: string): boolean {
    const action = this.extractAction(tcode);
    return ((action == '11') || (action == '13'));
  }

  // URL redirect to LEAD or tcode plain without ID
  urlLead(tcode: string): string {
    // const prefix: string = tcode.substring(0, (tcode.length - 2)) + '/';
    const baseTcodes = [
      'intro', 'login', 'register', 'forgot',
      '401', '403', '404', '500', 'terminal',
      'main',
      'mine',
      'gkm', 'gkcln', 'gksol', 'gktcd',
      'coreui', 'prime',
    ];
    let nextUrl = '';

    if (baseTcodes.includes(tcode.toLowerCase())) {
      nextUrl = this.url + tcode.toLowerCase();
    } else {
      const prefix: string = this.extractPrefix(tcode) + '/';
      nextUrl = this.url + prefix.toLowerCase() + tcode.toLowerCase();
    }
    return nextUrl;
  }

  // URL redirect to Form
  urlForm(tcode: string, value: string): string {
    // const prefix: string = tcode.substring(0, (tcode.length - 2)) + '/';
    const prefix: string = this.extractPrefix(tcode) + '/';
    return this.url + prefix.toLowerCase() + tcode.toLowerCase() + '/' + value;
  }

  // URL from prefix and action (Deprecate)
  urlCombine(prefix: string, action: string): string {
    return this.url + prefix.toLowerCase() + '/' + prefix.toLowerCase() + action;
  }

  // URL from prefix and action (Current)
  urlCombineTCode(prefix: string, action: string): string {
    return this.url + prefix.toLowerCase() + '/' + prefix.toLowerCase() + action;
  }

  // URL from prefix, action and Id (Deprecate)
  urlCombineId(prefix: string, action: string, id: string): string {
    return this.url + prefix.toLowerCase() + '/' + prefix.toLowerCase() + action + '/' + id;
  }

  // URL from prefix, action and Id (Current)
  urlCombineTCodeAndId(prefix: string, action: string, id: string): string {
    return this.url + prefix.toLowerCase() + '/' + prefix.toLowerCase() + action + '/' + id;
  }

  // URL redirect to Mainpage of tcode
  urlHome(tcode: string): string {
    // const prefix: string = tcode.substring(0, (tcode.length - 2));
    return this.url + this.extractPrefix(tcode).toLowerCase();
  }

  /*****************************************************************************
   * SIMPLE HASH
   * npm i -g typescript@next
   * npm i --save @types/node or
   * npm install --save @types/node
   * for other libraries, install @types/library_name
   *****************************************************************************/

   encode(str: string): string {
     /*
     const sh = new Buffer(str);
     return sh.toString('base64');
     */
     return btoa(str);
   }

   decode(str: string): string {
     /*
     const sh = new Buffer(str, 'base64');
     return sh.toString();
     */
     return atob(str);
   }

   encode_array(arr: string[]): string[] {
     return arr.map((elem, index) => {
       return this.encode(elem);
     });
   }

   decode_array(arr: string[]): string[] {
     return arr.map((elem, index) => {
       return this.decode(elem);
     });
  }

  // Encapsulation of Mana in service for simplification
  checkTcodeInMana(tcode: string): boolean {
    const encodedArray = (JSON.parse(localStorage.getItem('mana')));
    return encodedArray.includes(this.encode(tcode));
  }

  // To avoid multiple read of Mana in checking
  checkTcodeInEncodeArray(tcode: string, encodedArray: string[]): boolean {
    return encodedArray.includes(this.encode(tcode));
  }

  executeTCode(tcode: string, id: string = ''): void {
    const targetUrl: string = id
      ? this.url + this.extractPrefix(tcode) + '/' + tcode + '/' + id
      : this.url + this.extractPrefix(tcode) + '/' + tcode;
    console.log(targetUrl);
    this.router.navigate([targetUrl]);
  }

}
