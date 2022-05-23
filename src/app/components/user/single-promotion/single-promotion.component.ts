import { PromotionService } from 'src/app/services/promotion/promotion.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-promotion',
  templateUrl: './single-promotion.component.html',
  styleUrls: ['./single-promotion.component.css']
})
export class SinglePromotionComponent implements OnInit {
  product:any

  constructor(private route : ActivatedRoute ,private promotionService : PromotionService) { }

  ngOnInit(): void {  console.log(this.getProduct())
  }

  getProduct() {
    const id = this.route.snapshot.params['id'] ;
    this.promotionService.getProduct(+id)
    .subscribe (
      {
       next:(res)=> {
         this.product = res ;
       },
       error:(err) => {
         console.log(err)
       }
      }
    )
  }


  addToShopList() {
    const arr:any = [ JSON.parse(localStorage.getItem("shops")|| '{}')]
      localStorage.setItem("shops", JSON.stringify(this.product));
    const shop :any = this.product
    localStorage.setItem("new-shop", JSON.stringify(this.product));
    const newShop =JSON.parse(localStorage.getItem("new-shop")|| '{}');
    arr.push(newShop)
    localStorage.setItem("f-shop", JSON.stringify(arr));

}

}
