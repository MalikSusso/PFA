import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  baseUrl = "http://localhost:3000/promotions/" ;
  constructor(private http : HttpClient) {
  }

  //Add a Promotion
  postPromotion(data:any) {
  return this.http.post<any>(this.baseUrl,data)
  }

  //Get all Promotions
  getAllPromotions() {
  return this.http.get<any>(this.baseUrl)
  }

  //Update Promotion
  putPromotion(data:any , id:number) {
  return this.http.put<any>("http://localhost:3000/promotions/"+id,data)
  }

  // Delete Promotion
  deletePromotion(id:number){
  return this.http.delete<any>(this.baseUrl+id)
  }

  getProduct( id:number) {
    return this.http.get<any>("http://localhost:3000/promotions/"+id)
  }

}
