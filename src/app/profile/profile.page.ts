import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileForm:any = FormGroup;
  editValues:any;

  constructor(public fb:FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      license: [121212],
      random: [231231]
    });
  }


  edit(){
    console.log("edit",this.profileForm.value)
    this.editValues = this.profileForm.value
  }
  save(){
    console.log("save",this.profileForm.value)
    this.editValues = null 
  }
  cancel(){
    this.editValues = null
  }
}
