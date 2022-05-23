import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = "http://localhost:3000/productList/" ;

  constructor(private http : HttpClient) {}

  //Add a Product
  postProduct(data:any) {
    return this.http.post<any>(this.baseUrl,data)
  }

  // Delete Product
  deleteProduct(id:number){
    return this.http.delete<any>(this.baseUrl+id)
  }

  //Get all Product
  getAllProducts() {
    return this.http.get<any>(this.baseUrl)
  }

  //Update Product
  putProduct(data:any , id:number) {
    return this.http.put<any>("http://localhost:3000/productList/"+id,data)
  }

  getProduct( id:number) {
    return this.http.get<any>("http://localhost:3000/productList/"+id)
  }

}
