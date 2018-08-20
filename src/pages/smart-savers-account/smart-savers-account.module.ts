import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmartSaversAccountPage } from './smart-savers-account';

@NgModule({
  declarations: [
    SmartSaversAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(SmartSaversAccountPage),
  ],
})
export class SmartSaversAccountPageModule {}
