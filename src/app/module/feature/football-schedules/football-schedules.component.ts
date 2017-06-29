import { Component, OnInit } from '@angular/core';
import { ConsoleLoggerService } from "../../../service/logger/console-logger.service";
import { CollegeFootballSchedule } from "../../../model/college-football-schedule";
import { IPaging } from "../../shared/paging/paging.component";
import { FootballScheduleService } from "../../../service/backendrepository/restfull/football-schedule.service";

@Component( {
    selector: 'app-football-schedules',
    templateUrl: './football-schedules.component.html',
    styleUrls: ['./football-schedules.component.css']
} )
export class FootballSchedulesComponent implements OnInit {
    totalItemCount: number;
    itemPerPage: number;
    startItemIndex: number;
    endItemIndex: number;


    footballSchedules: CollegeFootballSchedule[];

    constructor( private logger: ConsoleLoggerService, private footballScheduleService: FootballScheduleService ) {
        logger.log( "FootballSchedulesComponent instance" );
        this.itemPerPage = 25;
        this.startItemIndex = 0;
        this.endItemIndex = this.itemPerPage;
    }

    /**
     * 
     */
    ngOnInit() {
        this.logger.log( "FootballSchedulesComponent ngOnInit", "" );
        this.footballScheduleService.collegeFootballScheduleCount.subscribe(( value ) => {
            this.totalItemCount = value;
            this.logger.log( "Total item count: ", this.totalItemCount );
        } );

        this.footballScheduleService.collegeFootballSchedule.subscribe(( footballSchedules ) => {

            this.logger.log( "Item Per Page: ", this.itemPerPage );
            this.footballSchedules = new Array<CollegeFootballSchedule>( footballSchedules.length );
            let i: number = 0;
            for ( let item of footballSchedules ) {
                this.footballSchedules[i++] = item;
            }
        } );
    }

    /**
     * 
     */
    ngAfterViewInit() {
        this.logger.log( "FootballSchedulesComponent ngAfterViewInit", "" );

        this.footballScheduleService.countCollegeFootballSchedule();
        this.footballScheduleService.getCollegeFootballSchedule( this.startItemIndex, this.endItemIndex );
    }

    /**
     * 
     * @param event
     */
    pageChangedHandler( event: IPaging ) {
        this.logger.log( "pageChangedHandler: ", event );
        this.footballScheduleService.getCollegeFootballSchedule( event.startIndex, event.endIndex );

    }
}
