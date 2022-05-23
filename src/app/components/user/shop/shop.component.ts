import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'pfa-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products:any
isDisplay:Boolean = true ;
error:boolean=false ;

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {this.getAllProducts()}

  getAllProducts(){
    this.productsService.getAllProducts()
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




  statusProduct () {
    this.isDisplay=!this.isDisplay ;
  }

}
