import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    handleError( error: any ): void {
        console.log( 'Hio' )
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;
    }
    
    
    constructor() {
        console.log( 'GlobalErrorHandler' )
    }

}