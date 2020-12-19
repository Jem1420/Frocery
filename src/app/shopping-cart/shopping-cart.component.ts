import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart : Product[] = [];
  cartTotal = 0;
  constructor(private _cs: CartService,private route: Router) { }

  ngOnInit(): void {
    this.cart = this._cs.getItemLocally();
    console.log(this.cart);
  }
  getTotal(){
    return this.cart.reduce((i,j) => i+j.price_fld * j.qty_fld, 0)
  }
  increaseCartItem(product){
    this._cs.addProduct(product);
  }

  decreaseCartItem(product){
    this._cs.decreaseProduct(product);
  }

  openShipping(){
    this.route.navigate(['/shipping']);
  }


}
