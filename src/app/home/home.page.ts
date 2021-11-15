import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewModalPage } from '../modal/view-modal/view-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userData:any;
  constructor(public modalController: ModalController) {}
  ngOnInit() {
   /*  console.log("data",this.data) */
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ViewModalPage,
      cssClass: 'my-custom-class',
      componentProps:{promoType: [ 'Free', 'Paid' ]}
    });
    modal.onDidDismiss()
    .then((data) => {
      this.userData = data['data']; 
      console.log(this.userData)
  });
    return await modal.present();

  }

  async edit(value:any){
    const modal = await this.modalController.create({
      component: ViewModalPage,
      cssClass: 'my-custom-class',
      componentProps:{userData: value,promoType: [ 'Free', 'Paid' ]}
    });
    modal.onDidDismiss()
    .then((data) => {
      this.userData = data['data']; 
      console.log(this.userData)
  });
    return await modal.present();

  }

}

