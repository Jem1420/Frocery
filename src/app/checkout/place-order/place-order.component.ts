import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  shipping : Cart[]= [];
  payment : Cart[]= [];
  cartItems : Cart[]= [];
  total= 0;
  constructor(private _cs: CartService) { }

  ngOnInit(): void {
    this.shipping = this._cs.getShippingLocally();
    this.payment = this._cs.getPaymentLocally();
    this.cartItems = this._cs.getItemLocally();
    this.total = this.getTotal();
  }

  getTotal(){
    return this.cartItems.reduce((i,j) => i+j.price_fld * j.qty_fld, 0);
  }

}
