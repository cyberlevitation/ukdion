import { Component } from '@angular/core';
import { TabsService } from '../../services/tabs-service';
import { ToastService } from '../../services/toast-service'
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tab-page-1.html',
  providers: [TabsService, ToastService]
})
export class TabPage1 {

  params:any = {};

  constructor(private tabsService: TabsService, private toastCtrl: ToastService) {
    this.tabsService.load("tab1").subscribe(snapshot => {
      this.params = snapshot;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.params = changes['data'].currentValue;
  }

  onItemClick(item:any) {
      this.toastCtrl.presentToast("Folow");
  }
}
