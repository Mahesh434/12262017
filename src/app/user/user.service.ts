import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { IUser } from './IUser';
import { IResponse } from '../IGlobal';

@Injectable()
export class UserService {
    constructor(private http: Http) {

    }

    getUserDetails(userId: string): Observable<IUser> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.get(`/ProjectK/rest/user/id/${userId}`, options)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        const body: IResponse = res.json();
        if (body.statusCode === 200) {
            const userDetails = body.data;
            return userDetails;
        }
        return null;
    }
}
