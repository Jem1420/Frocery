import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  OpenPayment(){
    this.route.navigate(['/payment'])
  }

}
