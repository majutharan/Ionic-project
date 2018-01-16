import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {HelloIonicComponent} from "../sample/hello-ionic.component";

@Component({
  templateUrl: 'itemdetails.component.html'
})
export class ItemdetailsComponent {
  constructor(private navControl: NavController) {}
  back() {
    this.navControl.push(HelloIonicComponent);
  }
}

