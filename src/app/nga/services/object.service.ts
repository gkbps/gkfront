import { Injectable } from '@angular/core';

@Injectable()
export class ObjectService {

  constructor( ) {
  }

  /*****************************************************************************
   * OBJECT
   * propInObject:        Check if a property exists in an Object
   *****************************************************************************/
   propInObject(obj, prop): boolean {
     return Object.prototype.hasOwnProperty.call(obj, prop);
    // return (prop in obj);
   }

   hasProp (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

}
