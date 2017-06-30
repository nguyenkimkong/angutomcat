import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { CollegeFootballSchedule } from "../../../model/college-football-schedule";
import { Http, URLSearchParams, Jsonp } from "@angular/http";
import { ConsoleLoggerService } from "../../logger/console-logger.service";
import { CrosJsonRequestService } from "./cros-json-request.service";
import { SERVICE_CONSTANTS } from "./constants";

@Injectable()
export class FootballScheduleService extends CrosJsonRequestService {

    collegeFootballScheduleCount: Subject<number> = new Subject<number>();
    collegeFootballSchedule: Subject<CollegeFootballSchedule[]> = new Subject<CollegeFootballSchedule[]>();
    groupCollegeFootballSchedule: Subject<any[]> = new Subject<any[]>();

    constructor( http: Http, jsonp: Jsonp, private logger: ConsoleLoggerService ) {
        super( http, jsonp );
        logger.log( "FootballScheduleService instance" );
    }


    /**
     * 
     */
    countCollegeFootballSchedule(): void {
        this.doGetWithHttpRequest( SERVICE_CONSTANTS.COLLEGE_FOOTBALL_COUNT_SCHEDULE ).subscribe(( result ) => {
            this.collegeFootballScheduleCount.next( result );
        }, ( error ) => {

        } );
    }

    /**
     * 
     */
    getScheduleAndGroupUp(): void {
        this.doGetWithHttpRequest( SERVICE_CONSTANTS.COLLEGE_FOOTBALL_GET_SCHEDULE_AND_GROUPUP ).subscribe(( result ) => {
            this.groupCollegeFootballSchedule.next( result );
        }, ( error ) => {

        } );
    }


    /**
     * 
     */
    getCollegeFootballSchedule( startItemIndex?: number, endItemIndex?: number ): void {
        let params: URLSearchParams = new URLSearchParams();
        params.set( 'startItemIndex', startItemIndex.toString() );
        params.set( 'endItemIndex', endItemIndex.toString() );

        this.doGetWithHttpRequest( SERVICE_CONSTANTS.COLLEGE_FOOTBALL_GET_SCHEDULE, params ).subscribe(( result ) => {
            this.collegeFootballSchedule.next( result as CollegeFootballSchedule[] );
        }, ( error ) => {
            this.logger.log( error, "" );
        } );
    }


}
