import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  popUp : boolean = true;


  constructor() { }


  onPopUpClick()
  {
    this.popUp = false;
  }

}
