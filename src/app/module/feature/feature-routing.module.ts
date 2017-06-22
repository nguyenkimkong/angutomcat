import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from "./message/message.component";
import { FeatureComponent } from "./feature.component";

const routes: Routes = [
    {
        path: '',
        component: FeatureComponent,
        children: [
            { path: 'allMessage', component: MessageComponent }
        ]
    }
];

@NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
} )
export class FeatureRoutingModule { }
