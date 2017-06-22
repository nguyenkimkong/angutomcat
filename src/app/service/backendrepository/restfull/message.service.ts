import { Injectable } from '@angular/core';
import { LoggerService } from "../../logger/logger.service";
import { CrosJsonRequestService } from "./cros-json-request.service";
import { Subject } from "rxjs/Subject";
import { Message } from "../../../model/message";
import { Observable } from "rxjs/Observable";
import { ConsoleLoggerService } from "../../logger/console-logger.service";
import { Jsonp, URLSearchParams, RequestOptions } from "@angular/http";
import { SERVICE_CONSTANTS, jsonp_params } from "./constants";
import { CollegeFootballSchedule } from "../../../model/college-football-schedule";


@Injectable()
export class MessageService extends CrosJsonRequestService {

    newMessages: Subject<Message[]> = new Subject<Message[]>();
    unreadMessageCount: Subject<number> = new Subject<number>();
    collegeFootballSchedule: Subject<CollegeFootballSchedule[]> = new Subject<CollegeFootballSchedule[]>();

    constructor( jsonp: Jsonp, private logger: ConsoleLoggerService) {
        super( jsonp );
        logger.log( "MessageService instance" );
    }

    /**
     * 
     */
    getMessages(): void {
        this.doGet( SERVICE_CONSTANTS.QUERY_MESSAGES_API ).subscribe(( result ) => {
            this.newMessages.next( result as Message[] );
        }, ( error ) => {

        } );
    }

    /**
     * 
     */
    getCollegeFootballSchedule(itemPerPage?: number, pageIndex? : number): void {
        this.doGet( SERVICE_CONSTANTS.COLLEGE_FOOTBALL_GET_SCHEDULE ).subscribe(( result ) => {
            this.collegeFootballSchedule.next( result as CollegeFootballSchedule[] );
        }, ( error ) => {

        } );
    }

    /**
     * 
     */
    countUnreadMessage(): void {
        this.doGet( SERVICE_CONSTANTS.UNREAD_MESSAGE_COUNT_API ).subscribe(( result ) => {
            this.unreadMessageCount.next( result );
        }, ( error ) => {

        } );
    }
}