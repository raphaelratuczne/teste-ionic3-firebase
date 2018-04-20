import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private auth: AuthService) {
    const dataUser = this.auth.data;
    console.log('dados do usuario ->', dataUser);
  }

  logout() {
  	// this.menu.close();
  	this.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  	// this.nav.setRoot(HomePage);
  }
}
