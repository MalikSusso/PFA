import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pfa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private window: Window ) { }

  ngOnInit(): void {  }


}
