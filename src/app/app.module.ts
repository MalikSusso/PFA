import { AuthService } from './auth.service';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/user/home/home.component';
import { ShopComponent } from './components/user/shop/shop.component';
import { BlogComponent } from './components/user/blog/blog.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { DialogComponent } from './components/admin/dialog/dialog.component';
import { AddPromotionComponent } from './components/admin/add-promotion/add-promotion.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminPromotionsComponent } from './components/admin/admin-promotions/admin-promotions.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { SingleProductComponent } from './components/user/single-product/single-product.component';
import { CardComponent } from './components/user/card/card.component';
import { SinglePromotionComponent } from './components/user/single-promotion/single-promotion.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    BlogComponent,
    AdminDashboardComponent,
    AddProductComponent,
    DialogComponent,
    AddPromotionComponent,
    AdminProductsComponent,
    AdminPromotionsComponent,
    LoginComponent,
    RegisterComponent,
    SingleProductComponent,
    CardComponent,
    SinglePromotionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [
    { provide: Window, useValue: window },
    LoginComponent,ShopComponent,AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
