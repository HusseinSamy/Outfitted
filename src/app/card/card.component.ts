import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() !imgSource: string = '../../assets/Photos/home page photo 1.jpg';
  tags: string[] = ['trousers','bags','shoes'];
  @Input() backgroundColor: string = '';
  @Input() shadowColor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
