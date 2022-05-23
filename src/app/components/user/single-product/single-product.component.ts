import { ShopComponent } from './../shop/shop.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
aa:any
 obj1 = { foo: 'bar', x: 42 };
 obj2 = { foo: 'baz', y: 13 };
 arr:any
 initShop : any
  old1:any
  new:any
  old:any
  monObjet:any
  myshopp : any
  products:any
  shopList:any
  product:any
  isDisplay:Boolean = true ;
  error:boolean=false ;
  productError:any;

  constructor(private route : ActivatedRoute , private productsService : ProductsService , private getProducts : ShopComponent ) {

    this. aa =JSON.parse(localStorage.getItem("new-shop")|| '{}');


  }


  ngOnInit(): void {
    console.log(this.getProduct())
    this.getProducts.getAllProducts()
    console.log(this.getProducts.getAllProducts())
  }

  getProduct() {
    const id = this.route.snapshot.params['id'] ;
    this.productsService.getProduct(+id)
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


