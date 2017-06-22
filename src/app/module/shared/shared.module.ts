import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from "./paging/paging.component";

@NgModule( {
    imports: [
        CommonModule
    ],
    declarations: [PagingComponent],
    exports: [PagingComponent]
} )
export class SharedModule { }
