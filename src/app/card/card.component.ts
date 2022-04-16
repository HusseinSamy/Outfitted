import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  imgSource: string = '../../assets/Photos/home page photo 1.jpg';
  tags:string[] = ['trousers','bags','shoes'];
  constructor() { }

  ngOnInit(): void {
  }

}
