import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';

import { Message } from "../../../model/message";
import { ConsoleLoggerService } from "../../../service/logger/console-logger.service";
import { MessageService } from "../../../service/backendrepository/restfull/message.service";

@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
} )
export class HeaderComponent implements OnInit {

    unreadMessageCount: number = 0;
    messages: Message[];

    constructor(private router: Router, private logger: ConsoleLoggerService, private messageService: MessageService) {
        logger.log( "HeaderComponent instance" );
    }

    ngOnInit() {

        this.messageService.unreadMessageCount.subscribe(( unreadMessageCount ) => { this.unreadMessageCount = unreadMessageCount; } );

        this.messageService.newMessages.subscribe(( messages ) => {

            this.messages = new Array<Message>( messages.length );
            let i: number = 0;
            for ( let item of messages ) {
                this.messages[i++] = item;
            }
        } );
    }

    ngAfterViewInit() {
        this.logger.log( "HeaderComponent ngAfterViewInit" );
    }
    
    /**
     * 
     */
    onReadAllMessageClick() : void {
        this.router.navigate(['/allMessages']);
    }

    /**
     * 
     */
    onOpenMessageDropDown(): void {
        this.messageService.getMessages();        
    }


}
