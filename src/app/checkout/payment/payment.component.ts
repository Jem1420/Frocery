import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: any[]= [];
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  OpenPlaceOrder(e){
    let form= {
      paymentSelect: e.target.elements[0].value
    }
    this.payment.push(form);
    localStorage.setItem('paymentMethod', JSON.stringify(this.payment));
    this.route.navigate(['/place-order']);
  }

}
