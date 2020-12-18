import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  constructor(private _ds: DataService) {

  }

  ngOnInit(): void {
    this._ds.getProducts("getproducts", null).subscribe((products: any)=> {
      this.productList = products.data;
    })
    console.log(this.productList);
  }

}
