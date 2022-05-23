import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { AddPromotionComponent } from '../add-promotion/add-promotion.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  @Inject(MAT_DIALOG_DATA) public editData:any;


  products:any;

  constructor( private productsService : ProductsService,private router: Router , private dialog : MatDialog) { }

  ngOnInit(): void { this.getAllProducts() }


// Method to delete a product with his ID

delete(product:any){
  let confirmMsg = confirm ('Are you sure to delete this product ?')
  if  (confirmMsg == true) { this.productsService.deleteProduct(product.id)
    .subscribe (res => {
      alert ('tfasakh jawou behi')
    })
  window.location.reload;
  }
}

editProduct(product:any) {
  this.dialog.open(AddProductComponent,{
    data:product
  })
  .afterClosed().subscribe (val => {
    if (val === 'update') {
      this.getAllProducts();
    }
  })
}


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



  openProductDialog() {
    this.dialog.open(AddProductComponent, {

    });
  }


}

