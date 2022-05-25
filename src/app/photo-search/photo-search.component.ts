import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-photo-search',
  templateUrl: './photo-search.component.html',
  styleUrls: ['./photo-search.component.sass']
})
export class PhotoSearchComponent implements OnInit {

  tags_search: FormGroup = new FormGroup({});
  id_search: FormGroup = new FormGroup({});
  searchById: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.tags_search = new FormGroup({
      'top': new FormControl(null, [Validators.required]),
      'bottom': new FormControl(null, [Validators.required]),
      'footwear': new FormControl(null, [Validators.required]),
      'accessory': new FormControl(null, [Validators.required]),
      'style': new FormControl(null, [Validators.required]),
      'gender': new FormControl(null, [Validators.required])
    });
    this.id_search = new FormGroup({
      'id': new FormControl(null, [Validators.required])
      });


  }

  onSubmit(){
    console.log('Logged In!')
  }

  onClick(){
    this.searchById = !this.searchById;
  }

}
