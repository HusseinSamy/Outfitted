import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-photo-data-upload',
  templateUrl: './photo-data-upload.component.html',
  styleUrls: ['./photo-data-upload.component.sass']
})
export class PhotoDataUploadComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  genders: string[] = ['Male','Female'];
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'top': new FormControl(null, [Validators.required]),
      'bottom': new FormControl(null, [Validators.required]),
      'footwear': new FormControl(null, [Validators.required]),
      'accessory': new FormControl(null, [Validators.required]),
      'style': new FormControl(null, [Validators.required]),
      'socks': new FormControl(null, [Validators.required]),
      'gender': new FormControl('Male', [Validators.required])
    });

  }

  onSubmit(){
    console.log('Logged In!')
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}

imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
}
