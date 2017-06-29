import { Component, OnInit } from '@angular/core';
import { ConsoleLoggerService } from "../../../service/logger/console-logger.service";
import { MessageService } from "../../../service/backendrepository/restfull/message.service";

@Component( {
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
} )

export class MessageComponent implements OnInit {

    totalItemCount: number;
    itemPerPage: number;
    startItemIndex: number;
    endItemIndex: number;


    constructor( private logger: ConsoleLoggerService, private messageService: MessageService ) {
        logger.log( "MessageComponent instance" );
        this.itemPerPage = 25;
        this.startItemIndex = 0;
        this.endItemIndex = this.itemPerPage;
    }

    /**
     * 
     */
    ngOnInit() {
        this.logger.log( "MessageComponent ngOnInit", "" );
    }

    /**
     * 
     */
    ngAfterViewInit() {
        this.logger.log( "MessageComponent ngAfterViewInit", "" );

    }



}
