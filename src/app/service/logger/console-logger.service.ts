import { Injectable } from '@angular/core';
import { LoggerService } from "./logger.service";

@Injectable()
export class ConsoleLoggerService extends LoggerService {

    constructor() {
        super();
        console.log( "Instance ConsoleLoggerService" );
    }

    log( msg: string, other?: any ) {
        console.log( msg, other );
    }

}
