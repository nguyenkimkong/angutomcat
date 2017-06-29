import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from "./message/message.component";
import { FeatureComponent } from "./feature.component";
import { FootballSchedulesComponent } from "./football-schedules/football-schedules.component";

const routes: Routes = [
    {
        path: '',
        component: FeatureComponent,
        children: [
            { path: 'allMessage', component: MessageComponent },
            { path: 'footballSchedule', component: FootballSchedulesComponent }
        ]
    }
];

@NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
} )
export class FeatureRoutingModule { }
