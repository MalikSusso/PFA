import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from '../../../services/products.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pfa-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

categoryList = ["category A","category B","category C","category D","category E"];

productForm !: FormGroup;

actionBtn : string = "Submit"

isDisplay : Boolean = true ;


  constructor(private formBuilder : FormBuilder ,
              private productService : ProductsService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public editData : any ,
              private dialogRef : MatDialogRef<AddProductComponent>) { }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group(
      {
        productName : ['',Validators.required],
        category : ['',Validators.required],
        size : ['S - M - L - XL - XXL'],
        price : ['',Validators.required],
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
      this.productForm.controls['productName'].setValue(this.editData.productName)
      this.productForm.controls['category'].setValue(this.editData.category)
      this.productForm.controls['size'].setValue(this.editData.size)
      this.productForm.controls['price'].setValue(this.editData.price)
      this.productForm.controls['colors'].setValue(this.editData.colors)
      this.productForm.controls['imageOne'].setValue(this.editData.imageOne)
      this.productForm.controls['imageTwo'].setValue(this.editData.imageTwo)
      this.productForm.controls['imageThree'].setValue(this.editData.imageThree)
      this.productForm.controls['description'].setValue(this.editData.description)
      this.productForm.controls['quantity'].setValue(this.editData.quantity)

    }


  }

  addProduct(){

    if (!this.editData) {
      console.log(this.productForm.value);
      if (this.productForm. valid)
      {this.productService.postProduct(this.productForm.value)
        .subscribe ({
          next:(res)=>{
            alert("Product added successfully");
            this.productForm.reset;
            this.dialogRef.close('submit');
          },
          error:()=>{
            alert("Error while adding the product");
          },
        });

      }

      else
      {
        this.updateProduct()
      }
    }

  }

  updateProduct(){
    this.productService.putProduct(this.productForm.value,this.editData.id)
    .subscribe({
      next :(res) => {
        alert ("Product updated successfully")
        this.productForm.reset;
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


