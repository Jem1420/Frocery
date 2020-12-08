import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  subject = new Subject();

  constructor() { }

  sendItem(product){
    this.subject.next(product); // Triggered event
  }

  getItem(){
    return this.subject.asObservable();
  }
}
