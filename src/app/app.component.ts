import { Component } from '@angular/core';
import { CrosJsonRequestService } from "./service/backendrepository/restfull/cros-json-request.service";
import { environment } from "../environments/environment";
import { ConsoleLoggerService } from "./service/logger/console-logger.service";
import { MessageService } from "./service/backendrepository/restfull/message.service";

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
} )
export class AppComponent {
    title = 'app';
    constructor( private logger: ConsoleLoggerService, private messageService: MessageService ) {
        console.log( environment.envName );
    }

    /**
     * 
     */
    ngAfterViewInit() {
        this.logger.log( "AppComponent ngAfterViewInit" );
       
        setInterval(() => {
            this.messageService.countUnreadMessage();
        }, environment.GLOBAL_CONFIG.message_service_refresh_rate );

    }
}
