import { IService } from './IService';

import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { LoadingService } from './loading-service'

@Injectable()
export class MenuService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getId = (): string => 'menu';

  getTitle = (): string => 'UIAppTemplate';

  getAllThemes = (): Array<any> => {
    return [
      { "title": "Profile", "theme": "ProfilePage", "icon": "icon-lock-open-outline", "listView": false, "component": "ProfilePage", "singlePage":true },
      {"title" : "Approvals", "theme"  : "ApprovalsPage",  "icon" : "icon-format-align-justify", "listView" : true, "component": "", "singlePage":true},
      {"title" : "Investments", "theme"  : "InvestmentsPage",  "icon" : "icon-format-line-spacing", "listView" : false, "component":"", "singlePage":true},
      {"title" : "Loans", "theme"  : "LoansPage",  "icon" : "icon-lock-open-outline", "listView" : false, "component":"", "singlePage":true}
      
    ];
  };

  getDataForTheme = (menuItem: any) => {
    return {
      "background": "assets/images/background/16.jpg",
      "image": "assets/images/logo/login-3.png",
      "title": "UK-DION INVESTMENT LTD - Menu"
    };
  };

  getEventsForTheme = (menuItem: any): any => {
    return {};
  };

  prepareParams = (item: any) => {
    return {
      title: item.title,
      data: {},
      events: this.getEventsForTheme(item)
    };
  };

  load(item: any): Observable<any> {
    var that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('menu')
          .valueChanges()
          .subscribe(snapshot => {
            that.loadingService.hide();
            observer.next(snapshot);
            observer.complete();
          }, err => {
            that.loadingService.hide();
            observer.error([]);
            observer.complete();
          });
      });
    } else {
      return new Observable(observer => {
        that.loadingService.hide();
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}
