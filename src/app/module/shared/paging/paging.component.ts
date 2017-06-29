import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as _ from 'underscore';

const DEFAULT_ITEM_PER_PAGE: number = 25;

export interface IPaging {
    totalItemCount: number;
    currentPage: number;
    itemPerPage: number;
    totalPages: number;
    startPage: number;
    endPage: number;
    startIndex: number;
    endIndex: number;
    pages: number[];
};

@Component( {
    selector: 'app-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.css']
} )
export class PagingComponent implements OnInit {

    private _totalItemCount: number;
    private _itemPerPage: number;

    pager: IPaging = {
        totalItemCount: 0,
        currentPage: 1,
        itemPerPage: DEFAULT_ITEM_PER_PAGE,
        totalPages: 0,
        startPage: 0,
        endPage: 0,
        startIndex: 0,
        endIndex: DEFAULT_ITEM_PER_PAGE - 1,
        pages: []
    };


    @Input()
    set totalItemCount( value: number ) {
        console.log( "PagingComponent setTotalItemCount: ", value );
        if ( value != undefined ) {
            this._totalItemCount = value;
            if ( this._itemPerPage == undefined ) {
                this._itemPerPage = DEFAULT_ITEM_PER_PAGE;
            }
            this.getPager( 1 );
        }
    }

    get totalItemCount() {
        return this._totalItemCount;
    }

    @Input()
    set itemPerPage( value: number ) {
        console.log( "PagingComponent setItemPerPage: ", value );
        this._itemPerPage = value;
        if ( this.totalItemCount > 0 ) {
            this.getPager( 1 );
        }
    }
    get itemPerPage() {
        return this._itemPerPage;
    }

    @Output( "page_change_event" ) pagingEmitter: EventEmitter<IPaging> = new EventEmitter();


    constructor() { }

    ngOnInit() {       
    }

    ngAfterViewInit() {       
    }

    setPage( page: number ) {
        if ( page < 1 || page > this.pager.totalPages ) {
            return;
        }

        // get pager object from service
        this.getPager( page );

        this.pagingEmitter.emit( this.pager );
    }
    /**
     * 
     * @param totalItems
     * @param currentPage
     * @param itemPerPage
     */
    getPager( currentPage: number = 1 ) {
        // calculate total pages
        let totalPages = Math.ceil( this.totalItemCount / this.itemPerPage );

        let startPage: number, endPage: number;
        if ( totalPages <= 10 ) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if ( currentPage <= 6 ) {
                startPage = 1;
                endPage = 10;
            } else if ( currentPage + 4 >= totalPages ) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        let startIndex = ( currentPage - 1 ) * this.itemPerPage;
        let endIndex = Math.min( startIndex + this.itemPerPage - 1, this._totalItemCount - 1 );

        // create an array of pages to ng-repeat in the pager control
        let pages = _.range( startPage, endPage + 1 );

        // return object with all pager properties required by the view
        this.pager.totalItemCount = this.totalItemCount;
        this.pager.currentPage = currentPage;
        this.pager.itemPerPage = this.itemPerPage;
        this.pager.totalPages = totalPages;
        this.pager.startPage = startPage;
        this.pager.endPage = endPage;
        this.pager.startIndex = startIndex;
        this.pager.endIndex = endIndex;
        this.pager.pages = pages;        
    }

}
