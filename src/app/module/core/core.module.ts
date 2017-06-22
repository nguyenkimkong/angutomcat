import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SharedModule } from "../shared/shared.module";

@NgModule( {
    imports: [
        CommonModule,
        CoreRoutingModule, SharedModule
    ],
    providers: [],
    declarations: [HeaderComponent, SidebarComponent],
    exports: [HeaderComponent, SidebarComponent]
} )
export class CoreModule {
    constructor() {
        console.log( "Instance CoreModule" );
    }
}
