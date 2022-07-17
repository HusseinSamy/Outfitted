import { Component, OnInit } from '@angular/core';
import { PopUpService } from '../_services/pop-up.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor(public popUp : PopUpService) { }

  ngOnInit(): void {
  }

}
