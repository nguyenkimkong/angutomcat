import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from "./module/feature/message/message.component";
import { FeatureModule } from "./module/feature/feature.module";


const routes: Routes = [
    { path: 'feature', loadChildren: './module/feature/feature.module#FeatureModule' }
];


@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )
export class AppRoutingModule { }
