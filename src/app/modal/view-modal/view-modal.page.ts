import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.page.html',
  styleUrls: ['./view-modal.page.scss'],
})
export class ViewModalPage implements OnInit {
  @Input() promoType:any[];

  valueOfSlide:any='one'
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }


  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  segmentChanged(data){

 this.valueOfSlide = data.detail.value
  }

  continue(){
    this.valueOfSlide='two'
  }
  back(){
    this.valueOfSlide='one'
  }
}
