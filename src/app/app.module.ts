import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FabricComponent } from './fabric/fabric.component';
import { PromiseComponent } from './promise/promise.component';
import { CartComponent } from './cart/cart.component';
import { PromoComponent } from './promo/promo.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModeloVitacuraComponent } from './products/modelo-vitacura/modelo-vitacura.component';
import { ModeloCuracaviComponent } from './products/modelo-curacavi/modelo-curacavi.component';
import { ModeloPuconComponent } from './products/modelo-pucon/modelo-pucon.component';
import { ModeloFutaleufuComponent } from './products/modelo-futaleufu/modelo-futaleufu.component';
import { ModeloNautilusComponent } from './products/modelo-nautilus/modelo-nautilus.component';
import { BordesPiscinaComponent } from './products/bordes-piscina/bordes-piscina.component';
import { JacuzziHotTubeComponent } from './products/jacuzzi-hot-tube/jacuzzi-hot-tube.component';
import { LoadingComponent } from './utils/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    FabricComponent,
    PromiseComponent,
    CartComponent,
    PromoComponent,
    AboutUsComponent,
    ModeloVitacuraComponent,
    ModeloCuracaviComponent,
    ModeloPuconComponent,
    ModeloFutaleufuComponent,
    ModeloNautilusComponent,
    BordesPiscinaComponent,
    JacuzziHotTubeComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
