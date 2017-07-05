import { Component, OnInit } from '@angular/core';
import { ConsoleLoggerService } from "../../../service/logger/console-logger.service";
declare var $: any;

@Component( {
    selector: 'app-paging-configuration',
    templateUrl: './paging-configuration.component.html',
    styleUrls: ['./paging-configuration.component.css']
} )
export class PagingConfigurationComponent implements OnInit {

    constructor( private logger: ConsoleLoggerService ) { }

    itemPerPages : number[] = [10, 25, 50, 100];
    itemPerPage: number = 25;
    
    message: string = 'hello';

    ngOnInit() {
    }

    /**
     * 
     */
    ngAfterViewInit() {
        this.logger.log( "PagingConfigurationComponent ngAfterViewInit", "" );

        var self = this;

        let popoverSetting = {
            html: true,
            container: 'body',
            placement: 'bottom',
            content: function() {
                var content = $( this ).attr( "data-popover-content" );
                var pcontent = $( content ).children( ".popover-body" );
                return ( !pcontent ) ? "" : pcontent.html();
            },
            title: function() {
                var title = $( this ).attr( "data-popover-content" );
                var phead = $( title ).children( ".popover-heading" );
                return ( !phead ) ? "" : phead.html();
            }
        };

        $( function() {
            $( '#popover_setting_cof' ).popover( popoverSetting );

            $( '#popover_setting_cof' ).on( 'hidden.bs.popover', function() {
            } )

            $( '#popover_setting_cof' ).on( 'shown.bs.popover', function() {
            } )

            $( document ).on( 'click', '.click_me', function() {
                self.doSomethingOnPopover();
            } );

        } );
    }


    doSomethingOnPopover() {
        console.log( "PagingConfigurationComponent doSomethingOnPopover" );
    }

}
