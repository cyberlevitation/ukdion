import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovalsPage } from './approvals';

@NgModule({
  declarations: [
    ApprovalsPage,
  ],
  imports: [
    IonicPageModule.forChild(ApprovalsPage),
  ],
})
export class ApprovalsPageModule {}
