import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { IClient } from './IClient';
import { IResponse } from '../IGlobal';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {
    constructor(private http: Http) { }

    createClient(clientDetails: IClient): Observable<number> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post('/ProjectK/rest/client/create', clientDetails, options)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        const body: IResponse = res.json();
        if (body.statusCode === 200) {
            return body.data;
        }
        return null;
    }
}
