import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewModalPage } from '../modal/view-modal/view-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ViewModalPage,
      cssClass: 'my-custom-class',
      componentProps:{promoType: [ 'Free', 'Paid' ]}
    });
    return await modal.present();
  }


}

