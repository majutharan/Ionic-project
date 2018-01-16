import {Component, ElementRef, ViewChild} from "@angular/core";
import {ActionSheetController, AlertController} from "ionic-angular";
import {animation} from "@angular/core/src/animation/dsl";

declare var google;

@Component({
  templateUrl: 'action.component.html',

})
export class ActionComponent {
  map;
  markers: any = [];
  /*latlng = {lat: 6.8819593, lng: 79.8612843};*/
  @ViewChild('map') mapElement: ElementRef;


  constructor(private actionSheetController: ActionSheetController,
              private alertCtrl: AlertController) {

  }


  /////
   initMap() {
    let haightAshbury = {lat: 6.8819593, lng: 79.8612843};

    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: haightAshbury,
      mapTypeId: 'roadmap',
      draggable: true,

    });

    // This event listener will call addMarker() when the map is clicked.
    this.map.addListener('click', (event)=> {
      this.addMarker(event.latLng);
    });

    // Adds a marker at the center of the map.
    this.addMarker(haightAshbury);

  }

   addMarker(location) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP
    });
    this.markers.push(marker);
  }

   setMapOnAll(map) {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
   clearMarkers() {
    console.log('clear markers');
    this.setMapOnAll(null);
  }

  showMarkers() {
    console.log('show markers');
    this.setMapOnAll(this.map);
  }
   deleteMarkers() {
    console.log('delete map');
    this.clearMarkers();
    this.markers = [];
  }



  /////






  ionViewDidLoad() {
    console.log('map');
    this.initMap();

  }



/*addMarker()
    {
      console.log("added marker");
      let marker = new google.maps.Marker({
        position: this.latlng,
        map: this.map,
        draggable: true
      });
    }*/



  /*loadMap() {
    console.log('check')
    let latLng = {lat: 6.8825347, lng: 79.8576826}
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: 'roadmap'
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    /!* this.map.addListener('click', function (e) {
       this.addMarker(e.latlng);

     });*!/


  }*/


  /*addMarker() {
    let marker = new google.maps.Marker({
      position: {lat: 6.882665, lng: 79.8670897},
      map: this.map,
      draggable: true
    });


  }*/


  /*removeMarker() {
    console.log('mouse');
    this.map.setMap(null);


  }*/


  openWindow() {
    let actionsheet = this.actionSheetController.create({
      title: 'album',
      buttons: [
        {
          text: 'Destructivate',
          role: 'destructivate',
          handler: () => {
            console.log('destructivate clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('archive clicked');
          }
        },
        {
          text: 'Delete',
          role: 'delete',
          handler: () => {
            console.log('dete clicked');
          }

        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel clicked');
          }
        }
      ]
    });
    actionsheet.present();
  }

  showAlert() {
    let alertSheet = this.alertCtrl.create({
      title: 'alert',
      subTitle: 'you have been hacked',
      buttons: ['ok']
    });
    alertSheet.present();
  }
}
