import { Injectable } from '@angular/core';
import { LoggerService } from "../../logger/logger.service";
import { CrosJsonRequestService } from "./cros-json-request.service";
import { Subject } from "rxjs/Subject";
import { Message } from "../../../model/message";
import { Observable } from "rxjs/Observable";
import { ConsoleLoggerService } from "../../logger/console-logger.service";
import { Jsonp, URLSearchParams, RequestOptions, Http } from "@angular/http";
import { SERVICE_CONSTANTS, jsonp_params } from "./constants";


@Injectable()
export class MessageService extends CrosJsonRequestService {

    newMessages: Subject<Message[]> = new Subject<Message[]>();
    unreadMessageCount: Subject<number> = new Subject<number>();

    constructor( http: Http, jsonp: Jsonp, private logger: ConsoleLoggerService ) {
        super( http, jsonp );
        logger.log( "MessageService instance" );
    }


    /**
     * 
     */
    getMessages(): void {
        this.doGetWithHttpRequest( SERVICE_CONSTANTS.QUERY_MESSAGES_API ).subscribe(( result ) => {
            this.newMessages.next( result as Message[] );
        }, ( error ) => {
            this.logger.log( error, "" );
        } );
    }

 
    /**
     * 
     */
    countUnreadMessage(): void {
        this.doGetWithHttpRequest( SERVICE_CONSTANTS.UNREAD_MESSAGE_COUNT_API ).subscribe(( result ) => {
            this.unreadMessageCount.next( result );
        }, ( error ) => {

        } );
    }
}