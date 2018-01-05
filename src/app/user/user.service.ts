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
            .map((res: Response) => {
                const body: IResponse = res.json();
                if (body.statusCode === 200) {
                    const userDetails = body.data;
                    return userDetails;
                }
                return null;
            });
    }

    createUser(user: IUser): Observable<number> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post('/ProjectK/rest/user/create', user, options)
            .map((res: Response) => {
                const body: IResponse = res.json();
                if (body.statusCode === 200) {
                    return body.data; // userid
                }
                return null;
            });
    }

    getAllUsers(): Observable<IUser[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.get('/ProjectK/rest/user/getAll', options)
            .map((res: Response) => {
                const body: IResponse = res.json();
                if (body.statusCode === 200) {
                    const users = body.data;
                    users.map(function (user: IUser) {
                        user.aboutSelf = window.atob(user.aboutSelf);
                    });
                    return users;
                }
                return null;
            });
    }

    getMasterFields(): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.get('/ProjectK/rest/mstrFields/getAll', options)
            .map((res: Response) => {
                const body: IResponse = res.json();
                if (body.statusCode === 200) {
                    return body.data;
                }
                return null;
            });
    }
}
