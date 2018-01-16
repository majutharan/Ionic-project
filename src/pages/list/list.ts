import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {ItemdetailsComponent} from "../itemdetails/itemdetails.component";


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItems: any;
  items: Array<{ title: string, content: string }>;

  constructor(public navControl: NavController, public navParams: NavParams) {
    this.items = [];
    this.selectedItems = this.navParams.get('item');
    for (let i = 0; i < 11; i++) {
      this.items.push({title: 'item' + i, content: 'this title no is ' + i});


    }
  }

  itemTapped() {
    this.navControl.push(ItemdetailsComponent);


  }
}
