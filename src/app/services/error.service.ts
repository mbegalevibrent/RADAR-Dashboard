import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ErrorService {

  static handleError(error: Response | any) {
    // TODO: add remote error logging
    console.log(error)
    return Observable.throw(error);
  }
}
