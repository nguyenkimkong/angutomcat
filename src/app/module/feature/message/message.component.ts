import { Component, OnInit } from '@angular/core';
import { ConsoleLoggerService } from "../../../service/logger/console-logger.service";
import { MessageService } from "../../../service/backendrepository/restfull/message.service";
import { CollegeFootballSchedule } from "../../../model/college-football-schedule";

@Component( {
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
} )

export class MessageComponent implements OnInit {

    footballSchedules: CollegeFootballSchedule[];
    // pager object

    constructor( private logger: ConsoleLoggerService, private messageService: MessageService) {
        logger.log( "MessageComponent instance" );
    }

    ngOnInit() {
        this.messageService.collegeFootballSchedule.subscribe(( footballSchedules ) => {

            this.footballSchedules = new Array<CollegeFootballSchedule>( footballSchedules.length );
            let i: number = 0;
            for ( let item of footballSchedules ) {
                this.footballSchedules[i++] = item;
            }
        } );
    }

    ngAfterViewInit() {
        this.logger.log( "MessageComponent ngAfterViewInit" );

        this.messageService.getCollegeFootballSchedule();
    } 

}
