import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { GoogleCardLayout1 } from '../../components/list-view/google-card/layout-1/google-card-layout-1';

@NgModule({
    declarations: [
        HomePage,
        GoogleCardLayout1
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
    ],
    entryComponents: [
        GoogleCardLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomePageModule { }
