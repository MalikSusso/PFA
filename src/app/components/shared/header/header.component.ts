import { Router } from '@angular/router';
import { LoginComponent } from './../../authentication/login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pfa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username : any = localStorage.getItem('username');
  test : String = "hello"

  isLoggedIn :  any ;
  constructor(public logged : LoginComponent , private router : Router) { }

  ngOnInit(): void { this.isUserLogged()
this.isUserLogged()
    console.log (this.isLoggedIn)


    }

  isUserLogged() : any{

    const user = localStorage.getItem('username');

    if (!user) {
       this.isLoggedIn = false
    }
    if (user)
    this.isLoggedIn = true
  }

  logout() {
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    localStorage.removeItem('password')


    this.router.navigate(['/'])

    window.location.reload()
  }


}
