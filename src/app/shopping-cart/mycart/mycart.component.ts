import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css'],
})
export class MycartComponent implements OnInit {
  cartItems : Product[
    // {id: 1, prodId:1, prodName: 'Test1', qty: 4, price: 100},
    // {id: 2, prodId:3, prodName: 'Test2', qty: 5, price: 200},
    // {id: 3, prodId:1, prodName: 'Test3', qty: 4, price: 300},
    // {id: 4, prodId:4, prodName: 'Test4', qty: 3, price: 400}
  ]= [];
  cartTotal = 0;

  constructor(private _cs: CartService) {}

  ngOnInit(): void {
    this.cartItems = this._cs.getItemLocally();
  }


}
