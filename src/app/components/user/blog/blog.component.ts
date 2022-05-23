import { PromotionService } from './../../../services/promotion/promotion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pfa-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  product:any
isDisplayBlog:boolean=false;
res1:any
products:any
err:any
  constructor(private promotionService : PromotionService) { }

  ngOnInit(): void {this.getAllPromotions()}

  getAllPromotions(){
    this.promotionService.getAllPromotions()
    .subscribe (
      {
       next:(res)=> {
         console.log(res);
         this.products = res ;
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
