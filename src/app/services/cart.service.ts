import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  subject = new Subject();
  cart = [];
  constructor( ) { }
  setData(id, data){
    this.cart[id] = data;
  }

  getData(id){
    this.cart[id];
  }

  saveCart(){
    if(this.cart ===[]){return;}
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  sendItem(product){
    this.subject.next(product); // Triggered event
    this.sendItemLocally(product);
  }

  sendItemLocally(product){
    this.cart.push(product);
    this.saveCart();
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getItem(){
    return this.subject.asObservable();
  }

  getItemLocally(){
    this.saveCart();
    if(localStorage.getItem('cart') === null){
      this.cart = [];
    }else{
      return this.cart = JSON.parse(localStorage.getItem('cart'));
    }
  }

  addProduct(product){
    let added = false;
    for (let p of this.cart) {
      if (p.id===product.id) {
        p.qty++;
        added = true;
        localStorage.setItem('cart', JSON.stringify(this.cart));
        break;
      }
    }if (!added) {
      this.cart.push(product);
      this.saveCart();
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  decreaseProduct(product){
    for (let [index,p] of this.cart.entries()) {
      if(p.id === product.id){
        p.qty -= 1;
        localStorage.setItem('cart', JSON.stringify(this.cart));
        if (p.qty == 0) {
          this.cart.splice(index,1);
          localStorage.setItem('cart', JSON.stringify(this.cart));
        }
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }



}
