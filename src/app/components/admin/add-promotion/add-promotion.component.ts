import { PromotionService } from '../../../services/promotion/promotion.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit {
  isDisplay : Boolean = true ;
  actionBtn : string = "Submit"


categoryList = ["category A","category B","category C","category D","category E"];
  promotionForm !: FormGroup;

  constructor(private formBuilder : FormBuilder ,
              private dialogRef : MatDialogRef<AddPromotionComponent> ,
              private promotionService:PromotionService,
              @Inject(MAT_DIALOG_DATA) public editData : any) { }

  ngOnInit(): void {

    this.promotionForm = this.formBuilder.group(
      {
        productName : ['',Validators.required],
        category : ['',Validators.required],
        size : ['S - M - L - XL - XXL'],
        price : ['',Validators.required],
        discount : ['',Validators.required],
        colors : [''],
        imageOne :['',Validators.required],
        imageTwo : [''],
        imageThree : [''],
        description :[''],
        quantity :[''],
      }
    );

    if(this.editData) {
      this.actionBtn = "Update"
      this.isDisplay = false
      this.promotionForm.controls['productName'].setValue(this.editData.productName)
      this.promotionForm.controls['category'].setValue(this.editData.category)
      this.promotionForm.controls['size'].setValue(this.editData.size)
      this.promotionForm.controls['price'].setValue(this.editData.price)
      this.promotionForm.controls['discount'].setValue(this.editData.discount)
      this.promotionForm.controls['colors'].setValue(this.editData.colors)
      this.promotionForm.controls['imageOne'].setValue(this.editData.imageOne)
      this.promotionForm.controls['imageTwo'].setValue(this.editData.imageTwo)
      this.promotionForm.controls['imageThree'].setValue(this.editData.imageThree)
      this.promotionForm.controls['description'].setValue(this.editData.description)
      this.promotionForm.controls['quantity'].setValue(this.editData.quantity)

    }
  }

  addPromotion() {
    if (this.promotionForm. valid)
    {this.promotionService.postPromotion(this.promotionForm.value)
      .subscribe ({
        next:(res)=>{
          alert("Product added successfully");
          this.promotionForm.reset;
          this.dialogRef.close('submit');
        },
        error:()=>{
          alert("Error while adding the product");
        },
      });

    }
  }

  updatePromotion() {
    this.promotionService.putPromotion(this.promotionForm.value,this.editData.id)
    .subscribe({
      next :(res) => {
        alert ("Product updated successfully")
        this.promotionForm.reset;
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the product");
      }
    })
  }

  closeDialog(){
    this.dialogRef.close()
  }

}
