import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url ="http://localhost/frocery-api/";
  subject = new Subject();
  cart = [];
  shipping = [];
  payment = [];

  constructor(private http: HttpClient ) { }

  getCartItems(endpoint, data): Observable<Cart[]>{
    return this.http.post<Cart[]>(this.url + endpoint,JSON.stringify(data));
  }

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

  getShippingLocally(){
    this.saveCart();
    if(localStorage.getItem('shipping') === null){
      this.shipping = [];
    }else{
      return this.shipping = JSON.parse(localStorage.getItem('shipping'));
    }
  }

  getPaymentLocally(){
    this.saveCart();
    if(localStorage.getItem('paymentMethod') === null){
      this.payment = [];
    }else{
      return this.payment = JSON.parse(localStorage.getItem('paymentMethod'));
    }
  }

  addProduct(product: Cart){
    let added = false;
    for (let p of this.cart) {
      if (p.prodid_fld===product.prodid_fld) {
        p.qty_fld++;
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
  decreaseProduct(product: Cart){
    for (let [index,p] of this.cart.entries()) {
      if(p.prodid_fld === product.id){
        p.qty_fld -= 1;
        localStorage.setItem('cart', JSON.stringify(this.cart));
        if (p.qty_fld == 0) {
          this.cart.splice(index,1);
          localStorage.setItem('cart', JSON.stringify(this.cart));
        }
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }



}
