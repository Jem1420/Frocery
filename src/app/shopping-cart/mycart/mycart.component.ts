import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css'],
})
export class MycartComponent implements OnInit {
  cartItems : Cart[]= [];
  cartTotal = 0;

  constructor(private _cs: CartService) {}

  ngOnInit(): void {
    this.cartItems = this._cs.getItemLocally();
  }

  getTotal(){
    return this.cartItems.reduce((i,j) => i+j.price_fld * j.qty_fld, 0)
  }


}
