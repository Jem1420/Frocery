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
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent, canActivate:[AuthGuard]},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard]},
  {path: 'shipping', component: ShippingComponent, canActivate: [AuthGuard]},
  {path: 'payment', component: PaymentComponent, canActivate: [AuthGuard]},
  {path: 'place-order', component: PlaceOrderComponent, canActivate: [AuthGuard]},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
