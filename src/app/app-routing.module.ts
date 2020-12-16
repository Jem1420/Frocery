import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ShippingComponent } from './checkout/shipping/shipping.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { PlaceOrderComponent } from './checkout/place-order/place-order.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'about', component: AboutComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'shipping', component: ShippingComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'place-order', component: PlaceOrderComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
