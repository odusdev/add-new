import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  editmode=false

  editValues: any = {
    license: 121212,
    random: 231231,
  };

  profileForm = this.fb.group({
    license: [],
    random: [],
  });

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm.setValue(this.editValues);
  }

  edit() {
    this.editmode=true
    this.profileForm.setValue(this.editValues);
  }
  save() {
    this.editmode=false
    this.editValues =  this.profileForm.value;
  }
  cancel() {
    this.editmode=false
    this.editValues = null;
  }
}
