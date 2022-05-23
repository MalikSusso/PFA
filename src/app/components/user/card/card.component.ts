import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  meyssa:any

  constructor() { }

  ngOnInit(): void {
     this.meyssa = JSON.parse(localStorage.getItem('f-shop') || '{}' );
    console.log(this.meyssa)
  }

}
