import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import { jsonp_params } from "./constants";
import { Subject } from "rxjs/Subject";

@Injectable()
export class CrosJsonRequestService {

    protected static json_params = jsonp_params();
    protected items: Subject<any> = new Subject<any>();

    constructor( private jsonp: Jsonp ) {
        console.log( "CrosJsonRequestService instance" );
    }

    /**
     * 
     * @param endpointAPI
     */
    doGet( endpointAPI: string ): Observable<any> {
        return this.jsonp.get( endpointAPI, { params: CrosJsonRequestService.json_params } ).map(this.extractData);
    }

    /**
     * 
     * @param res
     */
    private extractData( res: Response ) {
        let body = res.json();
        return body;
    }

    /**
     * 
     * @param error
     */
    private handleError( error: Response | any ) {
        let errMsg: string;
        if ( error instanceof Response ) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify( body );
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error( errMsg );
        return Observable.throw( errMsg );
    }



    /**/
}
