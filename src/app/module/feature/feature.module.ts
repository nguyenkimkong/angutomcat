import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from "./message/message.component";
import { SharedModule } from "../shared/shared.module";
import { FeatureRoutingModule } from "./feature-routing.module";
import { FeatureComponent } from "./feature.component";

@NgModule( {
    imports: [
        CommonModule, SharedModule, FeatureRoutingModule
    ],
    declarations: [MessageComponent, FeatureComponent],
    exports: [MessageComponent]
} )
export class FeatureModule { }
