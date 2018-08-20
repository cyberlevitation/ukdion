import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, ModalController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuService } from '../services/menu-service';
import { AppSettings } from '../services/app-settings';

import { IService } from '../services/IService';

import { ProfilePage } from '../pages/profile/profile';

import { InvestmentsPage } from '../pages/investments/investments';

import { ApprovalsPage } from '../pages/approvals/approvals';

import { LoansPage } from '../pages/loans/loans';

@Component({
    templateUrl: 'app.html',
    providers: [MenuService]
})

export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage = "HomePage";
    ProfilePage:any = ProfilePage;
    ApprovalsPage:any = ApprovalsPage;
    InvestmentsPage:any = InvestmentsPage;
    LoansPage:any = LoansPage;
    page: any;
    pages: any;
    params:any;
    leftMenuTitle: string;

    constructor(
        public platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public menu: MenuController,
        private menuService: MenuService,
        public modalCtrl: ModalController) {
        this.initializeApp();

      this.pages = [{ "title": "Profile", "theme": "ProfilePage", "icon": "icon-lock-open-outline", "listView": false, "component": "ProfilePage", "singlePage": true },
        { "title": "Approvals", "theme": "ApprovalsPage", "icon": "icon-format-align-justify", "listView": true, "component": "", "singlePage": true },
        { "title": "Investments", "theme": "InvestmentsPage", "icon": "icon-format-line-spacing", "listView": false, "component": "", "singlePage": true },
        { "title": "Smart Savers Account", "theme": "SmartSaversAccountPage", "icon": "icon-format-line-spacing", "listView": false, "component": "", "singlePage": true },
        { "title": "Loans", "theme": "LoansPage", "icon": "icon-lock-open-outline", "listView": false, "component": "", "singlePage": true }];
        this.leftMenuTitle = menuService.getTitle();
        this.menuService.load(null).subscribe( snapshot => {
            this.params = snapshot;
        });
        if (AppSettings.SHOW_START_WIZARD) {
          this.presentProfileModal();
        }
    }

    navigateToApprovalsPage(){
      this.nav.push(ApprovalsPage);
    }

    presentProfileModal() {
      const profileModal = this.modalCtrl.create("IntroPage");
      profileModal.present();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            localStorage.setItem("mailChimpLocal", "true");
        });
    }

    openPage(page) {
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    if (page.singlePage) {
        this.menu.open();
        this.nav.push(page.theme);
    } else {
      this.nav.setRoot("ItemsPage", {
        componentName: page.theme
      });
    }
  }

  getPageForOpen(value: string): any {
    return null;
  }

  getServiceForPage(value: string): IService {
    return null;
  }
}
