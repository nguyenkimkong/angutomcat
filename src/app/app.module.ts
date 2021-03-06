import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreModule } from "./module/core/core.module";
import { serviceInjectables } from "./service/serviceInjectables";
import { HttpModule, JsonpModule } from '@angular/http';
import { requestOptionsProvider } from "./service/core/default-request-options.service";
import { AppRoutingModule } from "./app-routing.module";
import { FeatureModule } from "./module/feature/feature.module";
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        FormsModule, BrowserModule, AppRoutingModule, HttpModule,
        JsonpModule, CoreModule, FeatureModule,PopoverModule.forRoot()
    ],
    providers: [serviceInjectables, requestOptionsProvider],
    bootstrap: [AppComponent]
} )
export class AppModule { }
