import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Menu } from '../../providers/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public menu: Menu
  ) { }

  ngOnInit() {
    console.dir(this.menu.menu);
  }

}
