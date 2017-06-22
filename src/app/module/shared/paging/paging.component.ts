import { Component, OnInit } from '@angular/core';
import { PagingService } from "./paging.service";

@Component( {
    selector: 'app-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.css'],
    providers: [PagingService]
} )
export class PagingComponent implements OnInit {
    private allItems: any[];
    pager: any = {};
    pagedItems: any[];

    constructor( private pagerService: PagingService ) { }

    ngOnInit() {
    }

    setPage( page: number ) {
        if ( page < 1 || page > this.pager.totalPages ) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager( this.allItems.length, page );

        // get current page of items
        this.pagedItems = this.allItems.slice( this.pager.startIndex, this.pager.endIndex + 1 );
    }

}
