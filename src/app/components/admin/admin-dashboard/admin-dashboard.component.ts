import { AddPromotionComponent } from '../add-promotion/add-promotion.component';
import { DialogComponent } from '../dialog/dialog.component';
import { ProductsService } from '../../../services/products.service';
import { Component, Inject, OnInit } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'admin-products',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public editData:any;

  email:any
  password:any


  products:any;

  constructor( private productsService : ProductsService,private router: Router , private dialog : MatDialog) { }

  ngOnInit(): void { this.getAllProducts() , this.checkadmin() }


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

editPromotion(promotion:any) {
  this.dialog.open(AddPromotionComponent,{
    data:promotion
  })
  .afterClosed().subscribe (val => {
    if (val === 'update') {
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

  openPromotionDialog() {
    this.dialog.open(AddPromotionComponent, {

    });
  }

  checkadmin(){
    this.email = localStorage.getItem('email');
    this.password = localStorage.getItem('password');

    if ((this.email === 'missa@missa.com')&& (this.password === 'youNeverKnow')) {
      this.router.navigate(['/admin']);

    }
    else {
      this.router.navigate(['/']);
    }
  }
}
