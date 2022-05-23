import { SinglePromotionComponent } from './components/user/single-promotion/single-promotion.component';
import { CardComponent } from './components/user/card/card.component';
import { SingleProductComponent } from './components/user/single-product/single-product.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { AdminPromotionsComponent } from './components/admin/admin-promotions/admin-promotions.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/user/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/user/shop/shop.component';
import { BlogComponent } from './components/user/blog/blog.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'cart' , component:CardComponent},
  {
    path:"",
    component:HomeComponent
  } ,
  {path:'shop/:id' , component:SingleProductComponent},
  {path:'blog/:id' , component:SinglePromotionComponent},

  {
    path:"",
    component:HomeComponent
  } ,
  {
    path:"admin",
    component:AdminDashboardComponent
  } ,
  {
    path:"add-product",
    component:AddProductComponent
  } ,
  {
    path:"register",
    component:RegisterComponent
  } ,
  {
    path:"login",
    component:LoginComponent
  } ,
  {
    path:"shop",
    component:ShopComponent
  },
  {
    path:"admin-products",
    component:AdminProductsComponent
  },
  {
    path:"admin-promotions",
    component:AdminPromotionsComponent
  },
  {
   path:"blog",
  component:BlogComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
