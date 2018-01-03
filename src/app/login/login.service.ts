import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ILogin } from './ILogin';
import { IResponse, ILoggedInUser } from '../IGlobal';
import { ProjectKUtils } from '../app.utils';

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
      ProjectKUtils.prototype.setAuthToken(body.data.token);
      const loggedInUser: ILoggedInUser = ProjectKUtils.prototype.getDetailsFromToken(body.data.token);

      return loggedInUser;
    }
    return null;
  }

  private handleErrorObservable(error: Response | any) {
    return Observable.throw(error.message || error);
  }

}
