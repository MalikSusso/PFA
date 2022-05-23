import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { PromotionService } from 'src/app/services/promotion/promotion.service';
import { AddPromotionComponent } from '../add-promotion/add-promotion.component';

@Component({
  selector: 'admin-promotions',
  templateUrl: './admin-promotions.component.html',
  styleUrls: ['./admin-promotions.component.css']
})
export class AdminPromotionsComponent implements OnInit {

  promotions:any;


  constructor(private productsService : PromotionService,private router: Router , private dialog : MatDialog) { }

  ngOnInit(): void {this.getAllPromotions() }

  getAllPromotions(){
    this.productsService.getAllPromotions()
    .subscribe (
      {
       next:(res)=> {
         console.log(res);
         this.promotions = res ;
       },
       error:(err) => {
         console.log(err)
       }
      }
    )
  }

  openPromotionDialog() {
    this.dialog.open(AddPromotionComponent, {
    });
  }

  editPromotion(promotion:any) {
    this.dialog.open(AddPromotionComponent,{
      data:promotion
    })
    .afterClosed().subscribe (val => {
      if (val === 'update') {
        this.getAllPromotions();
      }
    })
  }

  delete(promotion:any){
    let confirmMsg = confirm ('Are you sure to delete this promotion ?')
    if  (confirmMsg == true) { this.productsService.deletePromotion(promotion.id)
      .subscribe (res => {
        alert ('Promotion deleted with success')
      })
    window.location.reload;
    }
  }

}
