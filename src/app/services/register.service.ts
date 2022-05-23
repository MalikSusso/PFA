import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = "http://localhost:3000/profile/" ;


  constructor(private http : HttpClient) { }

    //Add a Promotion
    addUser(data:any) {
      return this.http.post<any>(this.baseUrl,data)
      }
}



