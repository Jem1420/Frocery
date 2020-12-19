import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shipping: any[]= [];
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  OpenPayment(e){
    let form ={
      address: e.target.elements[0].value,
      city: e.target.elements[1].value,
      postal: e.target.elements[2].value,
      country: e.target.elements[3].value
    }
    e.preventDefault();
    this.shipping.push(form);
    console.log("shipping:", form);
    localStorage.setItem('shipping', JSON.stringify(this.shipping));
    this.route.navigate(['/payment'])
  }

}
