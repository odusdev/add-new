import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HomePageModule } from 'src/app/home/home.module';
@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.page.html',
  styleUrls: ['./view-modal.page.scss'],
})
export class ViewModalPage implements OnInit {
  @Input() promoType:any[];
  @Input() userData:any;
  valueOfSlide:any='one'
  signinform:any = FormGroup;
  constructor(public modalController: ModalController, public fb:FormBuilder) { }

  ngOnInit() {
    this.signinform = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      promo: ['Free', [Validators.required]],
      voucherCode:  [true]
    });
    console.log("edit",this.userData)
    if(this.userData){
      this.signinform.patchValue({
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        email: this.userData.email,
        promo: this.userData.promo,
        voucherCode:  this.userData.voucherCode
      })
    }
  }

  get validation() {
    return this.signinform?.controls
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
    console.log(this.signinform.value)
  }
  back(){
    this.valueOfSlide='one'
  }
  add(){
    console.log(this.signinform.value)
    this.modalController.dismiss({
      'dismissed': true,
      'values': this.signinform.value
    });
  }
}
