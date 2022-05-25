import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-photo-data-upload',
  templateUrl: './photo-data-upload.component.html',
  styleUrls: ['./photo-data-upload.component.sass']
})
export class PhotoDataUploadComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'top': new FormControl(null, [Validators.required]),
      'bottom': new FormControl(null, [Validators.required]),
      'footwear': new FormControl(null, [Validators.required]),
      'accessory': new FormControl(null, [Validators.required]),
      'style': new FormControl(null, [Validators.required]),
      'gender': new FormControl(null, [Validators.required])
    });
  }

  onSubmit(){
    console.log('Logged In!')
  }

}
