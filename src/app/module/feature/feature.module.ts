import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from "./message/message.component";
import { SharedModule } from "../shared/shared.module";
import { FeatureRoutingModule } from "./feature-routing.module";
import { FeatureComponent } from "./feature.component";
import { FootballSchedulesComponent } from './football-schedules/football-schedules.component';

@NgModule( {
    imports: [
        CommonModule, SharedModule, FeatureRoutingModule
    ],
    declarations: [MessageComponent, FeatureComponent, FootballSchedulesComponent],
    exports: [MessageComponent]
} )
export class FeatureModule { }
