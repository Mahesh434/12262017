import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ILogin, ILoggedInUser } from './ILogin';
import { IResponse } from '../IGlobal';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  validateLoginDetails(loginDetail: ILogin): Observable<ILoggedInUser> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post('/ProjectK/rest/login/validate', loginDetail, options)
      .map(this.extractData);
  }


  private extractData(res: Response) {
    const body: IResponse = res.json();
    if (body.statusCode === 200) {
      const loggedInUser: ILoggedInUser = JSON.parse(window.atob(body.data.token.split('.')[1].replace('-', '+').replace('_', '/')));

      return loggedInUser;
    }
    return null;
  }

  private handleErrorObservable(error: Response | any) {
    return Observable.throw(error.message || error);
  }

}
