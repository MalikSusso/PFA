import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient,private router : Router, private registerService : RegisterService) { }

  ngOnInit(): void {
    this.registerForm =  this.formBuilder.group(
      {
        fullName : [''],
        mobile : [''],
        email :[''],
        password :[''],
      }
    )
  }

  addUser(){

      this.registerService.addUser(this.registerForm.value)
        .subscribe ({
          next:(res)=>{
            alert("Product added successfully");
            this.router.navigate(['login'])
          },
          error:()=>{
            alert("Error while adding the product");
          },
        });

      }
  }



