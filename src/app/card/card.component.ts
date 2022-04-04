import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  imgSource: string = '../../assets/Photos/0e688544579dc89f02913455bcb5ac92.jpg';
  tags:string[] = ['trousers','bags','shoes'];
  constructor() { }

  ngOnInit(): void {
  }

}
