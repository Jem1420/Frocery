import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../../models/cart'
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Cart
  cart : Cart[] = [];
  constructor(private _cs: CartService) {

  }

  ngOnInit(): void {
  }

  increaseCartItem(product:Cart){
    this._cs.addProduct(product);
  }

}
