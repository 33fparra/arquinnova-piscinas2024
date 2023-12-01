import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FabricComponent } from './fabric/fabric.component';
import { ProductsComponent } from './products/products.component';
import { PromoComponent } from './promo/promo.component';
import { PromiseComponent } from './promise/promise.component';
import { CartComponent } from './cart/cart.component';
import { BordesPiscinaComponent } from './products/bordes-piscina/bordes-piscina.component';
import { JacuzziHotTubeComponent } from './products/jacuzzi-hot-tube/jacuzzi-hot-tube.component';
import { ModeloCuracaviComponent } from './products/modelo-curacavi/modelo-curacavi.component';
import { ModeloFutaleufuComponent } from './products/modelo-futaleufu/modelo-futaleufu.component';
import { ModeloNautilusComponent } from './products/modelo-nautilus/modelo-nautilus.component';
import { ModeloPuconComponent } from './products/modelo-pucon/modelo-pucon.component';
import { ModeloVitacuraComponent } from './products/modelo-vitacura/modelo-vitacura.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'fabric', component: FabricComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'promo', component: PromoComponent},
  { path: 'compromiso', component: PromiseComponent},
  { path: 'bordes-piscina', component: BordesPiscinaComponent},
  { path: 'jacuzzi-hot-tube', component: JacuzziHotTubeComponent},
  { path: 'modelo-curacavi', component: ModeloCuracaviComponent},
  { path: 'modelo-futaleufu', component: ModeloFutaleufuComponent},
  { path: 'modelo-nautilus', component: ModeloNautilusComponent},
  { path: 'modelo-pucon', component: ModeloPuconComponent},
  { path: 'modelo-vitacura', component: ModeloVitacuraComponent},
  { path: 'cart', component: CartComponent},         

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
