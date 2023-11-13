import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FabricComponent } from './fabric/fabric.component';
import { ProductsComponent } from './products/products.component';
import { PromoComponent } from './promo/promo.component';
import { PromiseComponent } from './promise/promise.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'home', component: HomeComponent},
  { path: 'fabric', component: FabricComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'promo', component: PromoComponent},
  { path: 'promise', component: PromiseComponent},
  { path: 'cart', component: CartComponent},         

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
