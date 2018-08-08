import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomeService } from '../../services/home-service'; 


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]

})
export class HomePage {

  params: any = {};
  data: any = {};

  constructor(public navCtrl: NavController, public service: HomeService) { 
    service.load().subscribe(snapshot => {
      this.data = snapshot;

      this.params.data = {
        "title": "PlaylistName",
        "description": "Author:Username",
        "duration": "35:72",
        "items": [
          {
            "id": 1,
            "title": "INDIVIDUAL INVESTMENT APPROVAL",
            "image": "assets/images/avatar-small/0.jpg",
            "description": "Birth year: 1984",
            "shortDescription": "Country: Germany",
            "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-heart",
            "iconShare": "icon-share-variant"
          },
          {
            "id": 2,
            "title": "CHILD TRUST APPROVAL",
            "image": "assets/images/avatar-small/1.jpg",
            "description": "Birth year: 1980",
            "shortDescription": "Country: Germany",
            "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-heart",
            "iconShare": "icon-share-variant"
          },
          {
            "id": 3,
            "title": "CORPORATE APPROVAL",
            "image": "assets/images/avatar-small/2.jpg",
            "description": "Birth year: 1984",
            "shortDescription": "Country: Germany",
            "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-heart",
            "iconShare": "icon-share-variant"
          }
         
        ]
      };

      this.params.events = {
        'onItemClick': function (item: any) {
          console.log(item);
        },
        'onExplore': function (item: any) {
          console.log("Explore");
        },
        'onShare': function (item: any) {
          console.log("Share");
        },
        'onLike': function (item: any) {
          console.log("onLike");
        },
        'onFavorite': function (item: any) {
          console.log("onFavorite");
        },
        'onFab': function (item: any) {
          console.log("Fab");
        },
      }
    });
  }

}
