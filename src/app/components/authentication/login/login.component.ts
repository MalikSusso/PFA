import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isloggedIn : Boolean = false;


  public loginForm !: FormGroup

  constructor(private FormBuilder : FormBuilder,
    private router : Router , private http : HttpClient,
    private loginService : LoginService) { }

  ngOnInit(): void {

    this.loginForm = this.FormBuilder.group({
      email : [''],
      password : ['']
    })


  }

  login(){
    this.loginService.login()
      .subscribe ({
        next:(res)=>{
          const user = res.find((a:any) => {
            return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
          });
          if (user) {
            alert ("Login Success")
            this.loginForm.reset();
            console.log(user.fullName)
            localStorage.setItem('username', user.fullName);
            localStorage.setItem('email', user.email);
            localStorage.setItem('password', user.password);



            return this.isloggedIn = true ;

          }
          else
          {
            alert ("User Not Found")
            return false
          }

        },
        error:()=>{
          alert("Error while adding the product");
          return false
        },
      });
      this.router.navigate(['/'])
    }

    loggedIn(){
      return this.isloggedIn;
    }



}

