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

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        FormsModule, BrowserModule, AppRoutingModule, HttpModule,
        JsonpModule,
        CoreModule, FeatureModule
    ],
    providers: [serviceInjectables, requestOptionsProvider],
    bootstrap: [AppComponent]
} )
export class AppModule { }
